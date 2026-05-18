const modeTitles = {
  chat: "채팅 작업실",
  wiki: "LLMwiki 정리실",
  paper: "MCP 논문 검토실",
  github: "도구 조사실"
};

const modeContexts = {
  chat: null,
  wiki: "llmwiki",
  paper: "mcp",
  github: "github"
};

const modeSystemPrompts = {
  chat: "당신은 한국어로 답하는 로컬 AI 작업 파트너입니다. 답은 간결하지만 실행 가능한 형태로 작성하세요.",
  wiki: "당신은 LLMwiki 관리 보조자입니다. 원천 자료와 정리 문서를 구분하고, 한국어로 구조화된 제안을 하세요.",
  paper: "당신은 MCP 논문 초안 검토자입니다. 학술 논문 관점에서 주장, 구현 환경, 검증, 참고문헌을 점검하세요.",
  github: "당신은 개발 도구 조사 분석가입니다. 저장소의 용도, 보안, 설치 가능성, 활용 우선순위를 한국어로 정리하세요."
};

let activeMode = "chat";
let messages = [];

const modelSelect = document.querySelector("#modelSelect");
const modeTitle = document.querySelector("#modeTitle");
const messagesEl = document.querySelector("#messages");
const form = document.querySelector("#chatForm");
const input = document.querySelector("#promptInput");
const includeContext = document.querySelector("#includeContext");
const sendButton = document.querySelector("#sendButton");

function addMessage(role, content) {
  messages.push({ role, content });
  renderMessages();
}

function renderMessages() {
  messagesEl.innerHTML = "";
  for (const message of messages) {
    const node = document.createElement("div");
    node.className = `message ${message.role === "user" ? "user" : "assistant"}`;
    node.textContent = message.content;
    messagesEl.append(node);
  }
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

async function loadModels() {
  const response = await fetch("/api/models");
  const data = await response.json();
  const models = (data.models || []).map((model) => model.name);
  const preferred = ["gemma3:27b", "gemma3n:e4b", "llama3.3:70b-instruct-q4_K_M", "phi4:14b"];
  const ordered = [...preferred.filter((name) => models.includes(name)), ...models.filter((name) => !preferred.includes(name))];

  modelSelect.innerHTML = "";
  for (const name of ordered) {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    modelSelect.append(option);
  }
}

async function getContext() {
  const kind = modeContexts[activeMode];
  if (!kind || !includeContext.checked) return "";
  const response = await fetch(`/api/context/${kind}`);
  const data = await response.json();
  return data.context || "";
}

async function submitPrompt(prompt) {
  const model = modelSelect.value || "gemma3:27b";
  const context = await getContext();
  const system = modeSystemPrompts[activeMode];
  const history = messages.slice(-8).filter((message) => message.role !== "system");
  const userContent = context
    ? `다음 로컬 문맥을 참고하세요.\n\n${context}\n\n사용자 요청:\n${prompt}`
    : prompt;

  addMessage("user", prompt);
  sendButton.disabled = true;
  sendButton.textContent = "실행 중";

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: system },
          ...history,
          { role: "user", content: userContent }
        ],
        temperature: 0.35,
        num_ctx: activeMode === "paper" || activeMode === "wiki" ? 65536 : 32768
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "요청 실패");
    addMessage("assistant", data.message?.content || "응답이 비어 있습니다.");
  } catch (error) {
    addMessage("assistant", `오류: ${error.message}`);
  } finally {
    sendButton.disabled = false;
    sendButton.textContent = "실행";
  }
}

document.querySelectorAll(".mode").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".mode").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeMode = button.dataset.mode;
    modeTitle.textContent = modeTitles[activeMode];
    includeContext.checked = activeMode !== "chat";
  });
});

document.querySelectorAll("[data-prompt]").forEach((button) => {
  button.addEventListener("click", () => {
    input.value = button.dataset.prompt;
    input.focus();
  });
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const prompt = input.value.trim();
  if (!prompt) return;
  input.value = "";
  await submitPrompt(prompt);
});

loadModels()
  .then(() => {
    includeContext.checked = false;
    addMessage("assistant", "로컬 AI 작업실이 준비되었습니다. 모델을 선택하고 작업을 시작하세요.");
  })
  .catch((error) => {
    addMessage("assistant", `모델 목록을 불러오지 못했습니다: ${error.message}`);
  });

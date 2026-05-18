import { createReadStream } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const publicDir = join(root, "public");
const ollamaBase = "http://127.0.0.1:11434";
const port = Number(process.env.PORT || 3100);
const llmwikiDir = resolve(root, process.env.LLMWIKI_DIR || "../LLMwiki");
const mcpPaperDir = resolve(root, process.env.MCP_PAPER_DIR || "../MCP_paper");

const contextFiles = {
  llmwiki: [
    join(llmwikiDir, "wiki/index.md"),
    join(llmwikiDir, "wiki/pages/harness-engineering.md"),
    join(llmwikiDir, "wiki/synthesis/llmwiki-harness-engineering.md"),
    join(llmwikiDir, "docs/guidebook.md")
  ],
  mcp: [
    join(mcpPaperDir, "draft.md")
  ],
  github: [
    join(llmwikiDir, "wiki/pages/useful-github-repositories.md"),
    join(llmwikiDir, "wiki/sources/useful-github-links-2026-05-18.md")
  ]
};

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

function sendJson(res, status, data) {
  res.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 20_000_000) {
        reject(new Error("request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

async function fetchOllama(path, payload) {
  const response = await fetch(`${ollamaBase}${path}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(text || `Ollama request failed: ${response.status}`);
  }

  return text ? JSON.parse(text) : {};
}

async function loadContext(kind) {
  const files = contextFiles[kind] || [];
  const chunks = [];
  for (const file of files) {
    try {
      const text = await readFile(file, "utf8");
      chunks.push(`# ${file}\n\n${text.slice(0, 14000)}`);
    } catch (error) {
      chunks.push(`# ${file}\n\n읽기 실패: ${error.message}`);
    }
  }
  return chunks.join("\n\n---\n\n");
}

async function handleApi(req, res, pathname) {
  if (req.method === "GET" && pathname === "/api/models") {
    const response = await fetch(`${ollamaBase}/api/tags`);
    const data = await response.json();
    sendJson(res, 200, data);
    return;
  }

  if (req.method === "GET" && pathname.startsWith("/api/context/")) {
    const kind = pathname.split("/").pop();
    const context = await loadContext(kind);
    sendJson(res, 200, { kind, context });
    return;
  }

  if (req.method === "POST" && pathname === "/api/chat") {
    const body = JSON.parse(await readBody(req) || "{}");
    const messages = Array.isArray(body.messages) ? body.messages : [];
    const model = body.model || "gemma3:27b";
    const result = await fetchOllama("/api/chat", {
      model,
      messages,
      stream: false,
      options: {
        temperature: Number.isFinite(body.temperature) ? body.temperature : 0.35,
        num_ctx: Number.isFinite(body.num_ctx) ? body.num_ctx : 32768
      }
    });
    sendJson(res, 200, result);
    return;
  }

  sendJson(res, 404, { error: "Not found" });
}

async function serveStatic(req, res, pathname) {
  const rawPath = pathname === "/" ? "/index.html" : pathname;
  const safePath = normalize(rawPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(publicDir, safePath);
  if (!filePath.startsWith(publicDir)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  try {
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) throw new Error("not a file");
  } catch {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  const stream = createReadStream(filePath);
  stream.on("error", () => res.destroy());
  res.writeHead(200, {
    "content-type": mimeTypes[extname(filePath)] || "application/octet-stream",
    "cache-control": "no-store"
  });
  stream.pipe(res);
}

createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  try {
    if (url.pathname.startsWith("/api/")) {
      await handleApi(req, res, url.pathname);
      return;
    }
    await serveStatic(req, res, url.pathname);
  } catch (error) {
    sendJson(res, 500, { error: error.message });
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Local AI Workbench: http://127.0.0.1:${port}`);
});

# Local AI Workbench

M5 Max 로컬 환경에서 Ollama 모델을 바로 사용할 수 있도록 만든 개인 AI 작업실입니다. LLMwiki, MCP 논문 초안, GitHub 도구 조사 문서를 선택적으로 문맥에 넣어 한국어로 질의할 수 있습니다.

## 위치

- 저장소 안 프로그램: `/Users/sumilee/2026/LLMwiki/apps/local-ai-workbench`
- 독립 실행 복사본: `/Users/sumilee/2026/local-ai-workbench`
- LLMwiki 문맥: `/Users/sumilee/2026/LLMwiki`
- MCP 논문 문맥: `/Users/sumilee/2026/MCP_paper/draft.md`
- Ollama API: `http://127.0.0.1:11434`

## 실행

```bash
cd /Users/sumilee/2026/local-ai-workbench
npm start
```

저장소 안 버전을 실행할 때는 다음 경로를 사용합니다.

```bash
cd /Users/sumilee/2026/LLMwiki/apps/local-ai-workbench
npm start
```

브라우저에서 `http://127.0.0.1:3100`을 열면 됩니다.

## 권장 모델 배치

- `gemma3:27b`: 기본 주력 모델. 위키 정리, 논문 리뷰, 긴 한국어 답변에 우선 사용합니다.
- `gemma3n:e4b`: 빠른 초안, 짧은 요약, 아이디어 분류에 사용합니다.
- `llama3.3:70b-instruct-q4_K_M`: 무거운 추론 백업 모델입니다. 응답 속도보다 품질이 중요할 때 사용합니다.
- `phi4:14b`: 코드/논리 보조 후보입니다. 비교 테스트용으로 유지합니다.

## 사용 방식

1. 왼쪽에서 작업 모드를 고릅니다.
2. 상단에서 Ollama 모델을 선택합니다.
3. 위키, 논문, 도구 조사 모드에서는 `현재 모드 문맥 포함`을 켜면 로컬 문서가 함께 전달됩니다.
4. 빠른 작업 버튼으로 자주 쓰는 프롬프트를 불러오거나, 아래 입력창에 직접 요청을 작성합니다.

## 설계 의도

이 앱은 Open WebUI나 AnythingLLM을 대체하기보다, 현재 로컬 프로젝트에 맞춘 가벼운 하네스입니다. 설치된 로컬 모델이 실제 작업 문맥을 읽고 답하도록 만드는 것이 목적이며, 이후 문서 검색, 벡터 DB, 대화 저장, GitHub 커밋 보조 기능을 붙일 수 있습니다.

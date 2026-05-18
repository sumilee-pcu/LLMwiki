---
title: "Local AI Workbench"
type: page
status: draft
created: 2026-05-18
updated: 2026-05-18
tags: [local-ai, ollama, harness]
sources: [docs/guidebook.md]
---

# Local AI Workbench

Local AI Workbench는 LLMwiki 저장소와 Ollama 로컬 모델을 연결하는 웹 기반 작업실이다. 일반 채팅 UI보다 이 저장소의 문서 구조에 맞춰 `LLMwiki`, `MCP 논문`, `도구 조사` 문맥을 선택적으로 넣을 수 있게 만든 것이 핵심이다.

## 위치

```text
/Users/sumilee/2026/LLMwiki/apps/local-ai-workbench
```

## 실행

```bash
cd /Users/sumilee/2026/LLMwiki/apps/local-ai-workbench
npm start
```

브라우저 주소:

```text
http://127.0.0.1:3100
```

## 연결 모델

| 모델 | 권장 용도 |
| --- | --- |
| `gemma3:27b` | 기본 주력 모델, 위키 정리, 논문 리뷰 |
| `gemma3n:e4b` | 빠른 응답, 초안, 상태 확인 |
| `llama3.3:70b-instruct-q4_K_M` | 무거운 추론 백업 |
| `phi4:14b` | 코드/논리 비교 테스트 |

## 하네스 엔지니어링 관점

이 앱은 모델 자체보다 작업 환경을 설계하는 데 초점을 둔다. 모델 선택, 문맥 주입, 빠른 작업 버튼, 로컬 문서 연결을 한 화면에 묶어 반복 작업의 마찰을 줄인다.

## 향후 개선

- 대화 저장 기능
- 문서별 검색과 RAG 파이프라인
- 위키 문서 생성 템플릿
- GitHub 커밋 전 변경 요약
- Open WebUI 또는 AnythingLLM과의 역할 분리

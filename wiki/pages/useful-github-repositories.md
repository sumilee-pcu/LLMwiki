---
title: "유용한 GitHub 저장소"
type: page
status: draft
created: 2026-05-18
updated: 2026-05-18
tags: [github, tools, mcp, ai-tools]
sources:
  - "wiki/sources/useful-github-links-2026-05-18.md"
---

# 유용한 GitHub 저장소

## 요약

AI 활용, MCP, 자동화, 콘텐츠 제작, 3D 생성에 유용한 GitHub 저장소와 프로젝트를 정리한 문서다. 현재 목록은 사용자 제공 자료를 바탕으로 구성했으며, 이후 실제 설치와 검증 결과를 덧붙일 수 있다.

## 법률 검색 MCP

| 이름 | 링크 | 용도 | 메모 |
| --- | --- | --- | --- |
| 한국 법률 검색기 | https://github.com/seo-jinseok/korean-law-mcp | 법령·판례 검색 MCP | 국가법령정보센터 Open API ID 사용. Claude 같은 AI와 연결 가능. |
| 한국 법률 검색기 대안 후보 | https://github.com/chrisryugj/korean-law-mcp | 고도화된 법령정보 MCP | 법제처 API 기반, 조문·판례 검색, 인용 검증 강조. |

## 커뮤니케이션 MCP와 CLI

| 이름 | 링크 | 용도 | 메모 |
| --- | --- | --- | --- |
| 카카오톡 비서 | https://github.com/hadamyeedady12-dev/kmsg-mcp | 카카오톡 MCP 서버 | Claude Code에서 카카오톡 읽기·보내기·파일 전송을 수행. |
| 카카오톡 비서 기반 CLI | https://github.com/channprj/kmsg | 카카오톡 CLI | macOS에서 카카오톡 메시지를 CLI로 읽고 보내는 기반 도구. |

## 보이스 에이전트와 화면 제작

| 이름 | 링크 | 용도 | 메모 |
| --- | --- | --- | --- |
| Dograh | https://github.com/dograh-hq/dograh | Voice Agent 플랫폼 | 오픈소스·셀프호스팅 가능. Vapi/Retell 대안으로 소개됨. |
| OpenScreen | https://github.com/siddharthvaddem/openscreen | 화면 녹화·데모 제작 앱 | Screen Studio 대안 오픈소스 앱. Windows 설치 지원. |

## 3D 생성

| 이름 | 링크 | 용도 | 메모 |
| --- | --- | --- | --- |
| Pixal3D | https://github.com/TencentARC/Pixal3D | 이미지 기반 3D 생성 모델 | 단일 이미지에서 3D 에셋 생성. 데모와 모델 링크 제공. |
| Pixal3D 프로젝트 페이지 | https://ldyang694.github.io/projects/pixal3d/ | 공식 프로젝트 페이지 | 논문·데모·모델·코드 링크 모음. |
| Pixal3D 데모 | https://huggingface.co/spaces/TencentARC/Pixal3D | Gradio 데모 | Hugging Face Spaces에서 실행되는 데모. |

## 숏폼 콘텐츠 생성

| 이름 | 링크 | 용도 | 메모 |
| --- | --- | --- | --- |
| blog-shotform-gen | https://github.com/gaebalai/claudecode-to/tree/main/plugins/blog-shotform-gen | 블로그 기반 숏폼 생성 | 블로그 URL 1개로 60초 9:16 숏폼 mp4 생성. ElevenLabs, OpenAI 이미지 모델, Remotion 사용. |
| blog-shotform-gen 포함 저장소 | https://github.com/gaebalai/claudecode-to | Claude Code 플러그인 모음 | 설치 명령에 `blog-shotform-gen@claudecode.to` 포함. |

## 금융 멀티에이전트

| 이름 | 링크 | 용도 | 메모 |
| --- | --- | --- | --- |
| TradingAgents | https://github.com/TauricResearch/TradingAgents | LLM 멀티에이전트 기반 트레이딩 연구 프레임워크 | 분석가, 연구자, 트레이더, 리스크 관리자, 포트폴리오 매니저 역할을 분리한다. 투자 조언이 아니라 연구/하네스 참고자료로 다룬다. |

## 우선 검토 후보

LLMwiki와 직접 연결성이 높은 우선 검토 후보는 다음이다.

1. `korean-law-mcp`: 한국 법령·판례 검색을 LLM 작업 흐름에 붙일 수 있다.
2. `kmsg-mcp`: Claude Code와 카카오톡을 연결하는 MCP 사례로 참고 가치가 있다.
3. `blog-shotform-gen`: Claude Code 플러그인 구조와 콘텐츠 자동화 흐름을 볼 수 있다.
4. `Pixal3D`: 이미지 기반 3D 생성 모델 자료로 교육·콘텐츠 제작에 활용 가능하다.
5. `TradingAgents`: 금융 자동매매보다는 멀티에이전트 역할 분리와 위험 검토 하네스 설계 참고자료로 가치가 있다.

## 정정 메모

원문에는 `blog-shortform-gen`으로 적힌 항목이 있었지만, 실제 저장소 경로는 `blog-shotform-gen`이다. 위키에서는 실제 저장소 경로 기준으로 표기한다.

## 출처

- [[useful-github-links-2026-05-18|유용한 GitHub 링크 목록 2026-05-18]]
- [[tradingagents-paper-2024|TradingAgents 논문과 저장소]]

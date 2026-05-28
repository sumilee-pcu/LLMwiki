# LLMwiki

LLM이 읽고, 갱신하고, 검증하기 쉬운 개인 지식 위키입니다. Andrej Karpathy의 `llm wiki` gist 아이디어를 로컬·공개 저장소 환경에 맞게 정리한 골격입니다.

## 이 위키가 하는 일

이 저장소는 다음 세 가지를 동시에 추구합니다.

1. **LLM 친화적 구조** — 모든 문서는 front matter(YAML)와 출처 섹션을 갖춰, LLM이 페이지 의미와 출처를 즉시 파악할 수 있도록 설계되었습니다.
2. **원천과 해석의 분리** — `raw/`(원본) → `sources/`(요약 카드) → `pages/`(개념 정리) → `synthesis/`(종합 해석) 4단 구조로, LLM 요약의 오류를 나중에 검증할 수 있게 합니다.
3. **시점 고정과 영속 원칙의 분리** — 빠르게 변하는 정책·가격·도구 정보는 출처 카드에 시점 라벨을 붙여 고정하고, 정책이 바뀌어도 유지되는 원칙은 `pages/`에 영속화합니다.

## 누구를 위한 위키인가

- **LLM 도구·정책을 실무에 적용하는 개인 사용자** — 어떤 모델을 어디서(클라우드/로컬) 돌릴지 판단해야 하는 사용자
- **AI 융합 교육·연구를 운영하는 사람** — 강의·연수·논문 작업에 LLM을 결합해 운영 워크플로우를 표준화하려는 사용자
- **에이전트·MCP·자동화를 설계하는 개발자** — 장시간 실행되는 LLM 에이전트의 안정성과 비용을 함께 고려하는 설계자

## 어디서부터 읽으면 좋은가

### 처음 방문 — 위키의 전체 그림 파악

1. [개요](wiki/synthesis/overview.md) — 위키 전체 구조와 시작점
2. [하네스 엔지니어링](wiki/pages/harness-engineering.md) — 왜 이런 구조로 정리하는지
3. [SkillOpt](wiki/pages/skillopt.md) — 에이전트 skill 자동 최적화와 검증 게이트 기반 PromptOps
4. [유용한 GitHub 저장소](wiki/pages/useful-github-repositories.md) — 위키가 다루는 도구 카탈로그

### AI 도구 실무 활용법이 궁금할 때

1. [분야별 추천 프롬프트 라이브러리](wiki/pages/recommended-prompt-library.md) — 8개 분야 × ChatGPT/Gemini 프롬프트 매트릭스
2. [바이브 코딩 활용 사례](wiki/pages/vibe-coding-use-cases.md) — 10가지 활용 사례 적합도 분류

### LLM 비용·정책 변화에 대응할 때

1. [LLM 사용 경제학](wiki/pages/llm-usage-economics.md) — Tier 모델, 로컬 LLM 전략, 운영 원칙
2. [정책 현황 2026-05](wiki/sources/llm-subscription-policy-2026-05-current.md) — D-Day 이전 스냅샷
3. [정책 적용 예정 2026-06](wiki/sources/llm-subscription-policy-2026-06-upcoming.md) — D-Day 이후 변경 사항

### 에이전트·자동화 설계 참고

1. [하네스 엔지니어링](wiki/pages/harness-engineering.md) — 장시간 에이전트 설계 원칙과 비용 고려
2. [SkillOpt](wiki/pages/skillopt.md) — 자연어 skill 문서를 검증 루프로 자동 개선하는 방식
3. [TradingAgents](wiki/pages/tradingagents.md) — 멀티에이전트 역할 분리 사례
4. [로컬 AI 작업실](wiki/pages/local-ai-workbench.md) — Ollama 로컬 모델과 위키 문맥 연결

## 콘텐츠 맵

### 개념·주제 페이지 (`wiki/pages/`)

| 페이지 | 다루는 내용 |
| --- | --- |
| [하네스 엔지니어링](wiki/pages/harness-engineering.md) | 장시간 LLM 에이전트가 안정적으로 일하도록 설계하는 방법. 지침·상태·검증·범위·세션 생명주기와 비용 차원 |
| [SkillOpt](wiki/pages/skillopt.md) | 자연어 skill 문서를 text-space optimization 대상으로 삼아 rollout, reflection, bounded edit, validation gate로 개선하는 프레임워크 |
| [LLM 사용 경제학](wiki/pages/llm-usage-economics.md) | 작업 분류 3계층(Tier) 모델, 로컬 LLM 인프라 구성, 시연 3중 백업, 학습 환경 등급, 재사용 진단 도구 |
| [분야별 추천 프롬프트 라이브러리](wiki/pages/recommended-prompt-library.md) | 강의·연구·집필·코딩·데이터 분석·발표·행정·콘텐츠 8개 분야에서 ChatGPT와 Gemini 강점 구분 |
| [바이브 코딩 활용 사례](wiki/pages/vibe-coding-use-cases.md) | 10가지 활용 사례를 높음/중간/낮음 적합도로 분류 + 비용 구조 영향 매핑 |
| [유용한 GitHub 저장소](wiki/pages/useful-github-repositories.md) | 법률 MCP, 카카오톡 MCP, 보이스 에이전트, 3D 생성, 숏폼, 금융 멀티에이전트, 바이브코딩 교육 카테고리 |
| [TradingAgents](wiki/pages/tradingagents.md) | LLM 멀티에이전트 기반 트레이딩 연구 프레임워크. 역할 분리 패턴 참고 자료 |
| [로컬 AI 작업실](wiki/pages/local-ai-workbench.md) | Ollama 로컬 모델과 위키 문맥을 연결하는 웹앱 운용 |

### 원천 자료 요약 카드 (`wiki/sources/`)

| 카드 | 출처 |
| --- | --- |
| [SkillOpt 공개와 논문 v2 팩트체크 2026-05-28](wiki/sources/skillopt-2026-05-28.md) | Microsoft SkillOpt 프로젝트 페이지, GitHub 저장소, arXiv v2 논문 |
| [easy-vibe 저장소 평가 2026-05-20](wiki/sources/easy-vibe-2026-05-20.md) | datawhalechina/easy-vibe 저장소(바이브 코딩 3단계 커리큘럼) 검증 |
| [LLM 구독 정책 현황 2026-05](wiki/sources/llm-subscription-policy-2026-05-current.md) | 2026-06 D-Day 이전 3대 공급자 정책 스냅샷 |
| [LLM 구독 정책 적용 예정 2026-06](wiki/sources/llm-subscription-policy-2026-06-upcoming.md) | D-Day 이후 적용될 정책과 데이터 포인트 |
| [TradingAgents 논문과 저장소](wiki/sources/tradingagents-paper-2024.md) | TradingAgents 1차 자료 요약 |
| [유용한 GitHub 링크 목록 2026-05-18](wiki/sources/useful-github-links-2026-05-18.md) | 사용자 제공 GitHub 링크 1차 수집 카드 |

### 종합 문서 (`wiki/synthesis/`)

| 문서 | 다루는 내용 |
| --- | --- |
| [개요](wiki/synthesis/overview.md) | 위키 전체 구조와 진입점 종합 |
| [LLMwiki 하네스 엔지니어링](wiki/synthesis/llmwiki-harness-engineering.md) | 하네스 엔지니어링이 본 저장소에 어떻게 적용되었는지 종합 해석 |

### 운영 문서

- [전체 색인](wiki/index.md) — 모든 페이지의 한곳 모음
- [변경 로그](wiki/log.md) — 작업 판단과 의사결정 기록
- [상세 가이드북](docs/guidebook.md) — 운영 방법, 기대 효과, 프로그램 위치

## 위키 구조

### 4단 분리 원칙

```text
raw/         원천 자료 (원본 그대로, 수정 최소화)
  inbox/     새로 수집한 자료
  assets/    이미지, PDF, 첨부 파일

wiki/sources/    원천 자료별 요약 카드 (시점 라벨 포함)
wiki/pages/      재사용 가능한 개념·주제 페이지 (영속 원칙)
wiki/synthesis/  여러 자료를 엮은 종합 해석

wiki/index.md    전체 색인
wiki/log.md      변경·판단 로그

apps/local-ai-workbench/  Ollama 로컬 모델 + 위키 문맥 연결 웹앱
tools/wiki_lint.py        위키 링크와 필수 파일 점검
docs/guidebook.md         상세 가이드북
```

### 왜 4단으로 나누는가

| 계층 | 역할 | 변경 빈도 |
| --- | --- | --- |
| `raw/` | 원본 보존, LLM 요약 오류 검증의 근거 | 거의 없음 |
| `sources/` | 자료 1건 단위로 요약·시점 고정 | 자료 추가 시 |
| `pages/` | 자료를 가로질러 개념·원칙 정리 | 원칙 정련 시 |
| `synthesis/` | 여러 페이지를 엮어 큰 그림 제시 | 큰 흐름 변화 시 |

이 구조는 "정책이 바뀌어도 사용자가 어디를 갱신해야 할지" 명확하게 만듭니다. 가격이 바뀌면 `sources/`만 새 카드를 추가하고, 작업 분류 원칙이 바뀌면 `pages/`를 손봅니다.

## 문서 작성 흐름

1. 원천 자료를 `raw/inbox/` 또는 `raw/assets/`에 넣습니다.
2. 자료별 요약 카드를 `wiki/sources/`에 만듭니다. 시점 라벨(`-YYYY-MM-DD`)을 파일명에 포함합니다.
3. 재사용 가능한 개념은 `wiki/pages/`에 정리합니다.
4. 여러 자료를 묶은 해석은 `wiki/synthesis/`에 작성합니다.
5. `wiki/index.md`에 신규 문서 링크를 추가하고, 중요한 판단은 `wiki/log.md`에 남깁니다.

### 문서 템플릿

모든 문서는 다음 front matter를 갖습니다.

```yaml
---
title: "문서 제목"
type: page | source | synthesis | index | log
status: draft | active
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: [tag1, tag2]
sources:
  - "wiki/sources/관련-카드.md"
  - "https://원천-URL"
---
```

본문 마지막에는 `## 출처` 섹션을 두고, 위키 내부는 `[[파일명|표시 이름]]` 형식의 위키링크로, 외부는 일반 URL로 연결합니다.

## 로컬 사용법

```bash
# 위키 점검 (필수 파일과 위키링크 검사)
python3 tools/wiki_lint.py

# 전체 검색 (ripgrep)
rg "검색어" wiki raw
```

### 로컬 AI 웹앱 실행

```bash
cd apps/local-ai-workbench
npm start
```

실행 후 `http://127.0.0.1:3100`에서 접근합니다. Ollama가 `127.0.0.1:11434`에서 실행 중이어야 합니다.

### Obsidian으로 열기

저장소 루트 폴더를 vault로 지정하면 `[[위키링크]]`가 자동 연결됩니다.

## Vercel 공개 페이지

Vercel에는 로컬 Ollama 실행기가 아니라 공개용 정적 가이드 페이지를 배포합니다. Vercel 서버에서는 로컬 Ollama 엔드포인트에 접근할 수 없기 때문입니다.

```bash
npm run build
```

빌드 결과는 `dist/`에 생성됩니다. Vercel 설정은 `vercel.json`을 참고합니다.

## 기여·인용 원칙

- 본 저장소는 개인 지식 위키이므로 외부 PR보다 **인용·포크 후 자기화** 방식을 권장합니다.
- 문서를 인용하실 때는 페이지 링크와 작성 시점을 함께 표기해 주시기 바랍니다.
- 정책·가격 정보는 시점 고정 스냅샷이므로, 인용 시 반드시 1차 출처(공식 문서)를 함께 확인해 주십시오.

## 참고

- 상세한 운영 방법, 기대 효과, 프로그램 위치는 [LLMwiki 상세 가이드북](docs/guidebook.md)에 정리되어 있습니다.
- AI 에이전트가 본 저장소에 작업할 때 따라야 할 규칙은 [AGENTS.md](AGENTS.md)에 있습니다.

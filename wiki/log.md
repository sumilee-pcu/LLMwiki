---
title: "변경 로그"
type: log
status: active
created: 2026-05-18
updated: 2026-05-28
tags: [log]
sources: []
---

# 변경 로그

## 2026-05-18

- Karpathy의 LLM wiki gist 아이디어를 바탕으로 로컬 LLMwiki 초기 구조를 생성했다.
- 현재 로컬 환경에는 `qmd`가 없어, 의존성 없는 Markdown/Obsidian 친화 구조와 `rg`, `python3` 기반 점검으로 시작한다.
- 하네스 엔지니어링 문서를 추가하고, 주요 표시 제목과 템플릿을 한국어 기반으로 정리했다.
- 사용자 제공 유용한 GitHub 저장소 목록을 출처 카드와 위키 페이지로 추가했다.

## 2026-05-20

- 분야별 추천 프롬프트 라이브러리 페이지(`recommended-prompt-library.md`)를 추가했다. 강의·연구·집필·코딩·데이터 분석·발표·행정·콘텐츠 제작 8개 분야로 ChatGPT와 Gemini 강점을 구분해 정리했다.
- datawhalechina/easy-vibe 저장소 평가를 출처 카드(`easy-vibe-2026-05-20.md`)로 작성했다. 라이선스(CC BY-NC-SA 4.0) 주의 사항, 검증 기준 매핑, 활용 시나리오 별점을 포함한다.
- 바이브 코딩 활용 사례 페이지(`vibe-coding-use-cases.md`)를 추가했다. 10가지 활용 사례를 높음/중간/낮음 적합도로 분류하고, #4 폴더 구조 + #8 차시 PDF 세트화 결합을 가장 큰 레버리지로 판단했다.
- `useful-github-repositories.md`에 "바이브코딩 교육" 카테고리를 신설하고 easy-vibe를 등록했다. 상세 평가는 출처 카드에 분리했다.
- `index.md`에 "활용·실천" 섹션을 추가하고 신규 두 페이지를 연결했다.

## 2026-05-21

- LLM 구독 정책 전환 분석을 위키화했다. 시점 고정 사실(D-Day, 데이터 포인트, 1차 출처)과 영속적 원칙(Tier 모델, 로컬 LLM 전략)을 분리하는 원칙을 적용했다.
- 출처 카드를 D-Day 기준으로 두 개로 분리했다. `llm-subscription-policy-2026-05-current.md`(D-Day 이전 현황)와 `llm-subscription-policy-2026-06-upcoming.md`(D-Day 이후 적용)을 짝으로 운영해, 정책 변경 시점 비교가 가능하도록 했다.
- 영속 원칙 페이지 `llm-usage-economics.md`를 신설했다. 거시 명제, 작업 분류 3계층(Tier) 모델, 로컬 LLM 인프라 구성, 운영 원칙(시연 3중 백업·학습 환경 등급), 재사용 진단 도구를 포함한다.
- 기존 페이지 3장을 cross-link로 보강했다. `recommended-prompt-library.md` 모델 선택 가이드에 Tier 차원 추가, `vibe-coding-use-cases.md`에 "비용 구조 영향" 섹션 추가, `harness-engineering.md`에 "비용 구조와 하네스 설계" 섹션 추가.
- `index.md`에 "정책 스냅샷" 섹션과 "활용·실천" 항목 1건을 추가했다.
- 시중 출판 교재 중 프롬프트·LLM 활용 직결 도서 약 50권을 선별해 `prompt-library-books-2026-05.md` 카드로 정리했다. 10개 카테고리(프롬프트 직접 학습용 / 멀티 모델 비교 / 코딩·개발 / 에이전트·자동화 / LLM 응용·API·RAG / GPTs / 데이터·업무 / 콘텐츠 제작 / 연구·논문·강의 / 트렌드·이론)로 분류하고, 우선 추출 후보 5권을 명시했다. `recommended-prompt-library.md`의 sources에 등록했다.
- 코딩·개발 카테고리의 시중 교재 한 권을 참조해 개별 카드 `book-ai-pair-programming-2026-05.md`를 작성하고, `recommended-prompt-library.md` 상단에 "공통 프롬프트 작성 가이드" 섹션을 신설했다(전 8개 분야에 공통 적용).
- `prompt-library-books-2026-05.md`에 "참조 완료" 섹션과 6개월 단위 갱신 일정(2026년 11월)을 구체화했다.
- 저작권 안전화 정리: 위키 본문에는 (1) 학술 일차 출처가 있는 일반 용어(zero/one/few-shot, Chain of Thought, Tree of Thought, ReAct 등)와 (2) 일반화된 프롬프트 작성 점검 항목·결과물 형식 강제 패턴만 둔다. 도서 본문의 원칙·약어·예시·도식·표는 위키에 직접 옮기지 않는다. 책 카드도 본문 추출 표 없이 도서 메타데이터와 위키 적용 흔적만 기록한다. 인벤토리 카드의 자료 출처 표현과 "추출 완료/참조 완료" 명명을 모두 시중 교재 기준으로 일반화했다.
- `prompt-library-books-2026-05.md`에 "활용 가능 도서 (2025+ 출간)" 섹션을 신설했다. 2025-2026년 출간 기준으로 즉시 활용 가능한 시중 교재 15권(주로 한빛미디어·이지스·제이펍·리코멘드·스마트북스), 부분 활용 2권(2024년 이전 도구 기반), 실물 확인 필요 3권(파일명만으로 정식 출판본 특정 실패)으로 그룹화했다. GitHub URL은 웹 검색만으로 특정되지 않은 도서가 대부분이라 공란 처리하고 보강 절차(머리말 안내 → 출판사 예제 페이지 → 저자 GitHub 프로필 순)를 명시했다.

## 2026-05-28

- Microsoft SkillOpt를 LLMwiki에 추가했다. `wiki/sources/skillopt-2026-05-28.md`에는 프로젝트 페이지, GitHub 저장소, arXiv v2 기준 팩트체크를 분리해 기록했다.
- `wiki/pages/skillopt.md`를 신설했다. text-space optimization, validation-gated update, bounded edit, rejected-edit buffer, `best_skill.md` artifact를 LLMwiki의 하네스·프롬프트·Codex 운영과 연결했다.
- 프로젝트 페이지와 arXiv v2 사이의 성능 수치 불일치를 명시했다. 위키 본문에서는 arXiv v2 기준 GPT-5.5 direct chat +23.5, Codex +24.8, Claude Code +19.1을 우선 인용한다.
- `wiki/index.md`와 `wiki/pages/useful-github-repositories.md`에 SkillOpt 링크를 추가했다.
- 법령규칙 MCP 메모를 보강했다. `chrisryugj/korean-law-mcp`의 원격 MCP 주소 `https://korean-law-mcp.fly.dev/mcp`, 로컬 설치 명령 `npm install -g korean-law-mcp`, open.law.go.kr API 키 필요 조건, HWP/PDF 파싱 부가 후보 `chrisryugj/kordoc`를 `useful-github-repositories.md`와 출처 카드에 반영했다.

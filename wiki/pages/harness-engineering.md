---
title: "하네스 엔지니어링"
type: page
status: draft
created: 2026-05-18
updated: 2026-05-21
tags: [harness-engineering, codex, agent, cost-strategy]
sources:
  - "https://openai.com/index/harness-engineering/"
  - "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"
  - "https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html"
  - "https://github.com/openai/codex"
  - "https://github.com/walkinglabs/learn-harness-engineering"
  - "wiki/sources/llm-subscription-policy-2026-06-upcoming.md"
---

# 하네스 엔지니어링

## 요약

하네스 엔지니어링은 장시간 실행되는 AI 에이전트가 안정적으로 일할 수 있도록 코드, 문서, 테스트, 상태 기록, 실행 절차를 설계하는 방법이다. 핵심은 에이전트에게 단순히 프롬프트를 잘 쓰는 것이 아니라, 에이전트가 읽고 판단하고 검증하고 이어받을 수 있는 작업 환경을 만드는 데 있다.

LLMwiki 관점에서는 `AGENTS.md`, `wiki/log.md`, `tools/wiki_lint.py`, `raw/`와 `wiki/`의 분리 구조가 하네스 역할을 한다.

## 핵심 구성 요소

| 요소 | LLMwiki 적용 |
| --- | --- |
| 지침 | `AGENTS.md`에 작업 규칙과 문서 템플릿을 둔다. |
| 상태 | `wiki/log.md`에 변경, 판단, 미해결 질문을 기록한다. |
| 검증 | `tools/wiki_lint.py`로 필수 파일과 위키 링크를 점검한다. |
| 범위 | 원천 자료, 요약 카드, 개념 문서, 종합 문서를 분리한다. |
| 세션 생명주기 | 작업 시작 시 상태 확인, 작업 후 점검과 커밋을 수행한다. |

## 왜 중요한가

AI 에이전트는 한 번의 답변보다 여러 단계의 작업에서 더 큰 가치를 낸다. 하지만 장시간 작업에서는 맥락 손실, 중복 작업, 검증 누락, 잘못된 파일 수정 같은 문제가 생기기 쉽다. 하네스는 이런 문제를 줄이기 위한 작업 환경이다.

좋은 하네스는 에이전트에게 다음 정보를 제공한다.

- 무엇을 읽어야 하는지
- 어떤 파일은 보존해야 하는지
- 어떤 결과물이 성공인지
- 어떤 명령으로 검증해야 하는지
- 다음 세션이 어디서 이어가야 하는지

## LLMwiki에 필요한 하네스 패턴

### 1. 명시적 작업 지침

`AGENTS.md`는 에이전트가 저장소에 들어왔을 때 가장 먼저 읽어야 할 규칙이다. 이 파일에는 문서 언어, 원천 자료 보존 원칙, 검증 명령, 커밋 전 점검 방식이 들어간다.

### 2. 원천과 해석의 분리

`raw/`에는 원본 자료를 두고, `wiki/`에는 LLM이 정리한 해석을 둔다. 이 구조는 LLM의 요약 오류를 나중에 검증할 수 있게 해준다.

### 3. 진행 로그

`wiki/log.md`는 단순 변경 기록이 아니라 작업 판단의 메모리다. 왜 특정 구조를 선택했는지, 어떤 자료를 아직 못 읽었는지, 어떤 질문이 남았는지 남긴다.

### 4. 자동 점검

`tools/wiki_lint.py`는 최소한의 안전망이다. 현재는 필수 파일과 위키 링크를 검사한다. 이후에는 front matter, 출처 섹션, 깨진 외부 링크까지 검사하도록 확장할 수 있다.

### 5. 작은 단위의 커밋

하네스가 잘 작동하려면 변경 단위가 작아야 한다. 원천 수집, 자료 요약, 개념 문서 생성, 종합 문서 작성, 도구 개선을 가능한 한 분리해 커밋한다.

## 참고 저장소 확인 결과

`walkinglabs/learn-harness-engineering` 저장소는 하네스 엔지니어링을 학습하기 위한 프로젝트 기반 자료다. 이 저장소는 OpenAI, Anthropic, Martin Fowler의 논의를 바탕으로 다음 주제를 다룬다.

- 에이전트를 위한 지침 파일
- 상태와 진행 기록
- 테스트와 검증 루프
- 작업 범위 제한
- 세션 시작과 종료 절차
- 사람과 에이전트가 함께 일하기 위한 저장소 구조

따라서 하네스 엔지니어링 주제를 LLMwiki에 추가할 때 좋은 참고자료로 사용할 수 있다.

## LLMwiki 적용 체크리스트

- [x] `AGENTS.md`가 있다.
- [x] 원천 자료 영역 `raw/`가 있다.
- [x] 정리된 위키 영역 `wiki/`가 있다.
- [x] 진행 로그 `wiki/log.md`가 있다.
- [x] 기본 검증 도구 `tools/wiki_lint.py`가 있다.
- [x] 사람용 가이드북 `docs/guidebook.md`가 있다.
- [ ] 자료별 요약 카드가 충분히 쌓여 있다.
- [ ] 하네스 관련 참고자료 4개가 각각 `wiki/sources/`에 요약되어 있다.
- [ ] 세션 시작 스크립트 또는 체크리스트가 있다.

## 비용 구조와 하네스 설계

장시간 실행되는 에이전트는 토큰·도구 호출·컨텍스트 유지 비용이 단일 채팅 대비 수십~수백 배 발생한다. 공급자들이 2026년 들어 인터랙티브 사용과 프로그래매틱 사용의 회계 기준을 분리하기 시작하면서, 하네스 설계의 의사결정에 비용 차원이 추가되었다.

| 설계 결정 | 비용 영향 |
| --- | --- |
| 에이전트 재시도 횟수 한도 | 무한 루프 시 크레딧 폭발 직격탄 |
| 컨텍스트 윈도우 크기 | 매 호출의 입력 토큰 단가 결정 |
| 도구 호출 빈도 | 다중 도구 체이닝은 호출 수 누적 |
| 백엔드 모델 선택 | 동일 하네스도 로컬 LLM vs 프런티어 모델 선택에 따라 비용 차이 극단적 |
| 자동화 트리거 조건 | cron/이벤트 트리거의 빈도가 월 누적 사용량 결정 |

따라서 하네스 설계 시 "안정성·검증" 외에 "어느 작업을 어느 Tier에서 실행할지"를 명시적으로 정해야 한다. 자세한 작업 분류 원칙은 [[LLM Usage Economics|LLM 사용 경제학]] 참고.

## 다음 작업

1. OpenAI, Anthropic, Martin Fowler, OpenAI Codex, walkinglabs 저장소를 각각 `wiki/sources/`에 요약 카드로 정리한다.
2. `tools/wiki_lint.py`가 front matter와 `출처` 섹션을 검사하도록 확장한다.
3. 작업 시작 체크리스트를 `docs/session-checklist.md`로 만든다.
4. GitHub push 권한을 해결한 뒤 원격 저장소에 배포한다.
5. 하네스별 비용 프로파일 측정 템플릿을 작성한다(재시도 한도·컨텍스트 크기·도구 호출 수 기록).

## 출처

- [OpenAI - Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/)
- [Anthropic - Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [Martin Fowler - Harness Engineering](https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html)
- [GitHub - OpenAI Codex](https://github.com/openai/codex)
- [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering)

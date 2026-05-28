---
title: "12-Factor Agents"
type: page
status: draft
created: 2026-05-28
updated: 2026-05-28
tags: [12-factor-agents, llm-agent, harness-engineering, context-engineering, human-in-the-loop, software-architecture]
sources:
  - "wiki/sources/12-factor-agents-2026-05-28.md"
  - "https://github.com/humanlayer/12-factor-agents"
---

# 12-Factor Agents

## 요약

12-Factor Agents는 HumanLayer의 Dex Horthy가 정리한 프로덕션급 LLM 에이전트 설계 원칙이다. 핵심은 좋은 AI 에이전트를 "LLM이 목표까지 알아서 반복하는 마법 루프"로 보지 않고, 대부분은 일반 소프트웨어이며 특정 판단 지점에 LLM이 들어가는 시스템으로 설계해야 한다는 점이다.

LLMwiki 관점에서 12-Factor Agents는 [[Harness Engineering|하네스 엔지니어링]]의 실전 설계 체크리스트다. `SkillOpt`가 skill 문서를 어떻게 자동 개선할지 다룬다면, 12-Factor Agents는 에이전트의 상태, 맥락, 제어 흐름, 사람 승인, 작은 agent 분리를 어떻게 설계할지 알려준다.

## 왜 필요한가

많은 팀은 agent framework로 빠르게 prototype을 만들고 70-80% 품질까지 도달한다. 문제는 80% 품질로는 customer-facing 기능을 안정적으로 운영하기 어렵다는 점이다. 그 다음 단계로 가려면 framework 내부 prompt, flow, context, tool call 방식을 역공학해야 하고, 결국 처음부터 다시 짜는 일이 생긴다.

12-Factor Agents의 결론은 단순하다.

| 흔한 접근 | 12-Factor Agents식 접근 |
| --- | --- |
| agent framework가 context와 loop를 알아서 관리 | context window, prompt, control flow를 앱 코드가 소유 |
| 만능 agent 하나가 모든 업무 처리 | 작고 초점이 좁은 agent 여러 개로 분리 |
| tool call을 LLM API의 특수 기능처럼 취급 | tool call을 구조화 출력과 deterministic code 실행으로 취급 |
| 중요한 판단까지 자동 진행 | human-in-the-loop tool call로 승인·보류·질문 처리 |
| 내부 상태가 쌓이며 재현 어려움 | stateless reducer처럼 입력 상태에서 다음 상태를 계산 |

## 12가지 원칙

| 번호 | 원칙 | 실무 의미 |
| ---: | --- | --- |
| 1 | Natural Language to Tool Calls | 사용자의 자연어 요청을 명시적 intent와 structured action으로 바꾼다. |
| 2 | Own your prompts | prompt를 vendor/framework 내부 설정이 아니라 코드와 문서로 관리한다. |
| 3 | Own your context window | LLM에 넣을 정보, 순서, 형식, 밀도를 직접 정한다. |
| 4 | Tools are just structured outputs | tool call을 JSON/schema 기반 structured output으로 다룬다. |
| 5 | Unify execution state and business state | 실행 상태와 업무 상태를 같은 추적 체계 안에 둔다. |
| 6 | Launch/Pause/Resume with simple APIs | 긴 작업을 시작·중지·재개할 수 있는 API로 만든다. |
| 7 | Contact humans with tool calls | 위험하거나 모호한 결정은 사람에게 묻는 tool call로 처리한다. |
| 8 | Own your control flow | while loop, retry, branching, timeout을 framework에 숨기지 않는다. |
| 9 | Compact Errors into Context Window | 오류를 LLM이 복구할 수 있는 짧고 구조화된 맥락으로 압축한다. |
| 10 | Small, Focused Agents | 한 agent의 역할을 좁혀 context window와 테스트 범위를 작게 유지한다. |
| 11 | Trigger from anywhere | chat UI뿐 아니라 Slack, email, webhook, cron 등 실제 업무 접점에서 시작한다. |
| 12 | Stateless reducer | agent를 "현재 상태를 받아 다음 상태를 반환하는 함수"처럼 설계한다. |

## 초보자에게 중요한 4가지

사용자가 제공한 요약문을 LLMwiki 기준으로 정리하면 다음 4가지가 가장 실용적이다.

| 요약 | 대응 원칙 | 적용 방법 |
| --- | --- | --- |
| 뭘 기억할지는 직접 정한다 | Factor 3 | 자동 memory에 맡기지 말고 이번 답변에 필요한 사건, 문서, tool result만 선별한다. |
| 만능 비서보다 전문 agent 여러 개 | Factor 10 | 일정 요약, 이메일 초안, 회의록 정리처럼 업무 단위를 쪼갠다. |
| 같은 입력엔 추적 가능한 출력 | Factor 12 + Factor 5/8 | 숨은 상태를 줄이고, 상태·흐름·결과를 로그로 남겨 재현 가능하게 만든다. |
| 중요한 결정은 사람에게 묻는다 | Factor 7 | 결제, 배포, 매수, 외부 발송은 approval tool call을 거치게 한다. |

## LLMwiki 적용

LLMwiki에서 12-Factor Agents는 다음 운영 원칙으로 번역할 수 있다.

| 원칙 | LLMwiki 적용 |
| --- | --- |
| Own prompts | `AGENTS.md`와 `wiki/pages/`의 작업 규칙을 명시적 문서로 관리 |
| Own context window | `raw/`, `wiki/sources/`, `wiki/pages/` 중 어떤 내용을 LLM에 넣을지 선별 |
| Unify state | `wiki/log.md`에 판단, 변경, 미해결 질문을 남김 |
| Human tool call | GitHub push, 외부 발송, 결제·매매 같은 고위험 작업은 승인 단계 추가 |
| Small focused agents | 논문 요약 agent, 법령 검색 agent, 위키 정리 agent, Unity 개발 agent를 분리 |
| Stateless reducer | "입력 자료 + 현재 로그 + 규칙"에서 다음 문서 diff를 생성하는 구조로 설계 |

## SkillOpt와의 관계

[[SkillOpt]]와 12-Factor Agents는 서로 보완적이다.

| 질문 | 12-Factor Agents | SkillOpt |
| --- | --- | --- |
| 무엇을 설계하나 | 에이전트 소프트웨어 구조 | 에이전트 skill 문서 개선 루프 |
| 핵심 안전장치 | context/control/state/human approval 소유 | validation gate, bounded edit, rejected buffer |
| 산출물 | 운영 가능한 agent architecture | 검증된 `best_skill.md` |
| LLMwiki 적용 | 하네스 구조와 작업 분리 | 규칙 파일 자동 개선 실험 |

## 주의점

12-Factor Agents는 논문이나 benchmark가 아니라 경험 기반 설계 가이드다. 따라서 위키에서는 성능 수치처럼 인용하지 않고, 에이전트 운영 설계의 실무 패턴으로 다룬다. 별 수나 fork 수는 변동하므로 source 카드의 확인 시점 기준으로만 기록한다.

## 다음 작업

1. `AGENTS.md`를 12-Factor Agents 관점에서 점검하는 체크리스트를 만든다.
2. LLMwiki 작업을 "위키 정리 agent", "출처 검증 agent", "GitHub 배포 agent"처럼 작은 역할로 분해한다.
3. `tools/wiki_lint.py`에 front matter와 출처 섹션 검사를 추가해 Factor 9/12의 검증성을 높인다.
4. 고위험 작업 승인 규칙을 `docs/session-checklist.md` 또는 `AGENTS.md`에 명시한다.

## 출처

- [[12-factor-agents-2026-05-28|12-Factor Agents 검증 메모 2026-05-28]]
- [humanlayer/12-factor-agents GitHub 저장소](https://github.com/humanlayer/12-factor-agents)

---
title: "12-Factor Agents 검증 메모 2026-05-28"
type: source
status: draft
created: 2026-05-28
updated: 2026-05-28
tags: [12-factor-agents, llm-agent, harness-engineering, human-in-the-loop, context-engineering]
source_url: "https://github.com/humanlayer/12-factor-agents"
source_path:
---

# 12-Factor Agents 검증 메모 2026-05-28

## 자료 개요

12-Factor Agents는 HumanLayer의 Dex Horthy가 정리한 프로덕션급 LLM 에이전트 설계 원칙이다. 저장소 설명은 "production customers에게 맡길 수 있을 만큼 좋은 LLM-powered software를 만들기 위한 원칙"을 묻는 프로젝트로 되어 있다.

저장소는 GitHub `humanlayer/12-factor-agents`에 공개되어 있으며, 2026-05-28 확인 시점에 약 22.6k stars와 1.7k forks로 표시된다. 라이선스 파일은 Apache License 2.0이다.

## 핵심 주장

핵심 주장은 좋은 에이전트가 단순히 "프롬프트 + 도구 묶음 + 목표까지 반복"하는 구조가 아니라는 점이다. 원문은 실제 고객-facing agent 대부분이 프레임워크의 마법 루프보다 deterministic software에 가깝고, 적절한 지점에 LLM step을 끼워 넣은 형태라고 설명한다.

저자는 HumanLayer를 만들며 최소 100명의 SaaS builders, 주로 technical founders와 대화했고, 많은 팀이 비슷한 흐름을 겪었다고 정리한다.

| 단계 | 원문 흐름 요약 |
| --- | --- |
| 빠른 시작 | agent를 만들기로 하고, framework로 빠르게 시작 |
| 70-80% 도달 | 초기 demo와 prototype 품질은 빠르게 도달 |
| 품질 벽 | 80% 품질은 customer-facing feature로 부족 |
| 역공학 | framework, prompts, flow를 뜯어봐야 다음 단계로 갈 수 있음 |
| 재작성 | 결국 처음부터 다시 짜는 팀이 많음 |

## 12가지 원칙

| 번호 | 원칙 | LLMwiki 해석 |
| ---: | --- | --- |
| 1 | Natural Language to Tool Calls | 자연어 입력을 구조화된 intent/tool call로 바꾸기 |
| 2 | Own your prompts | 프롬프트를 프레임워크 내부가 아니라 코드베이스 자산으로 관리 |
| 3 | Own your context window | LLM에 넣을 맥락 구조와 밀도를 직접 설계 |
| 4 | Tools are just structured outputs | tool call을 특수 마법이 아니라 구조화 출력으로 다루기 |
| 5 | Unify execution state and business state | 실행 상태와 업무 상태를 분리하지 않고 추적 가능하게 통합 |
| 6 | Launch/Pause/Resume with simple APIs | 시작·중단·재개를 단순 API로 내구성 있게 설계 |
| 7 | Contact humans with tool calls | 중요한 판단은 사람에게 묻는 tool call로 처리 |
| 8 | Own your control flow | 루프와 분기 흐름을 프레임워크에 숨기지 않고 소유 |
| 9 | Compact Errors into Context Window | 오류를 맥락 창에 넣을 수 있는 밀도 높은 정보로 압축 |
| 10 | Small, Focused Agents | 만능 agent보다 작고 초점이 좁은 agent로 분리 |
| 11 | Trigger from anywhere, meet users where they are | Slack, email, webhook, cron 등 실제 접점에서 시작 가능하게 설계 |
| 12 | Make your agent a stateless reducer | 입력 상태를 받아 다음 상태를 내는 reducer처럼 설계 |

## 사용자 요약 팩트체크

| 사용자 요약 | 판정 | 정정·보완 |
| --- | ---: | --- |
| GitHub 별 19,000개 | 수정 필요 | 2026-05-28 확인 시점 GitHub 표시는 약 22.6k stars |
| 100명 넘는 SaaS 창업자 인터뷰 | 대체로 맞음 | 원문 표현은 at least 100 SaaS builders, mostly technical founders |
| 70-80% 품질 벽 | 맞음 | 원문에 70-80% quality bar와 80%는 고객 기능에 부족하다는 흐름이 있음 |
| 대부분 일반 소프트웨어 + LLM 한 스푼 | 맞음 | 원문은 많은 agentic 제품이 mostly deterministic code에 적절한 LLM step을 넣은 형태라고 설명 |
| "뭘 기억할지는 네가 정해라" | 맞음 | Factor 3 Own your context window에 대응 |
| "전문 알바 다섯 명" | 맞음 | Factor 10 Small, Focused Agents에 대응 |
| "같은 입력엔 같은 출력" | 보완 필요 | Factor 12 stateless reducer와 Factor 5/8의 state/control flow 소유까지 함께 봐야 함 |
| "중요한 결정은 사람에게" | 맞음 | Factor 7 Contact humans with tool calls에 대응 |

## LLMwiki 반영 가치

반영 가치가 높다. SkillOpt가 "skill 문서를 어떻게 개선할 것인가"에 가깝다면, 12-Factor Agents는 "애초에 에이전트를 어떤 소프트웨어 구조로 만들어야 매일 쓸 수 있는가"에 답한다.

LLMwiki에서는 다음 문서와 연결한다.

- [[Harness Engineering|하네스 엔지니어링]]
- [[SkillOpt]]
- [[Local AI Workbench|로컬 AI 작업실]]
- [[Useful GitHub Repositories|유용한 GitHub 저장소]]

## 출처

- [humanlayer/12-factor-agents GitHub 저장소](https://github.com/humanlayer/12-factor-agents)
- [12-Factor Agents README](https://github.com/humanlayer/12-factor-agents/blob/main/README.md)
- [Factor 3 - Own your context window](https://github.com/humanlayer/12-factor-agents/blob/main/content/factor-03-own-your-context-window.md)
- [Factor 7 - Contact humans with tool calls](https://github.com/humanlayer/12-factor-agents/blob/main/content/factor-07-contact-humans-with-tools.md)
- [Factor 10 - Small, Focused Agents](https://github.com/humanlayer/12-factor-agents/blob/main/content/factor-10-small-focused-agents.md)
- [Factor 12 - Make your agent a stateless reducer](https://github.com/humanlayer/12-factor-agents/blob/main/content/factor-12-stateless-reducer.md)
- [LICENSE - Apache License 2.0](https://github.com/humanlayer/12-factor-agents/blob/main/LICENSE)

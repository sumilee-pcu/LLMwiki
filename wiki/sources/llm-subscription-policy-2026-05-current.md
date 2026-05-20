---
title: "LLM 구독 정책 현황 2026-05 (D-Day 이전)"
type: source
status: active
created: 2026-05-21
updated: 2026-05-21
tags: [llm-pricing, subscription, claude, gemini, codex, snapshot-2026-05]
source_url: https://code.claude.com/docs/en/agent-sdk/overview
source_path:
---

# LLM 구독 정책 현황 2026-05 (D-Day 이전)

## 자료 개요

2026년 5월 21일 기준, 3대 프런티어 공급자(Anthropic Claude, Google Gemini, OpenAI Codex)의 LLM 구독·자동화 정책 스냅샷이다. 본 카드는 6월 D-Day 이전 시점의 상태를 고정 기록하며, 이후 변경된 정책은 자매 카드 [[llm-subscription-policy-2026-06-upcoming]]에 정리한다.

## 현재 작동 방식

### Anthropic Claude (Pro / Max)

| 항목 | 2026-05 현황 |
| --- | --- |
| 채팅(claude.ai) 사용 | 구독 한도 내 |
| Claude Code 대화형 사용 | 구독 한도 내 |
| `claude -p` 비대화형 호출 | 구독 한도와 동일 풀에서 차감 |
| Agent SDK 기반 3rd party 앱 | 구독 한도와 동일 풀에서 차감 |
| 한도 산정 기준 | "일반적인 개별 사용" 전제 |

핵심: 구독자가 `claude -p`를 스크립트·cron·CI에 연결해 사실상 API처럼 사용해도 추가 비용이 발생하지 않는다. 단, Anthropic은 정책 문서에서 "Pro/Max 한도는 일반 개별 사용 전제"임을 명시하고 있으며, 우회적 무제한 사용은 제한 대상으로 본다.

### Google Gemini

| 항목 | 2026-05 현황 |
| --- | --- |
| Gemini 앱·웹 사용 | 무료/Pro/Ultra 플랜 내 |
| Gemini CLI 개인 사용 | Google AI Pro·Ultra·무료 개인 사용자에게 제공 |
| Gemini Code Assist IDE 확장 | 동일하게 제공 |
| Antigravity CLI | 별도 제품으로 병행 출시(Go 기반, 병렬 실행 지원) |
| 유료 Gemini API 키 | 정상 동작 |
| Gemini Enterprise Agent Platform | 정상 동작 |

핵심: Gemini CLI를 통한 무료/구독 기반 자동화가 가능한 마지막 시점이다.

### OpenAI Codex

| 항목 | 2026-05 현황 |
| --- | --- |
| 과금 단위 | API 토큰 사용량 기준 (2026-04-02 전환 완료) |
| 적용 플랜 | Plus, Pro, ChatGPT Business, 신규 Enterprise |
| 공유 풀 | Codex + ChatGPT for Excel + Workspace Agents가 동일 풀 |
| 사용량 미터 | 5시간 롤링 한도, 주간 한도, 페이고 크레딧 3중 추적 |
| 초과 시 | 크레딧 구매 또는 API 키 사용 |

핵심: Codex는 이미 토큰 기반으로 전환되어 "구독에 포함되지만 무제한 아님" 구조다. 3대 공급자 중 회계 분리가 가장 먼저 적용된 사례.

## 거시 명제

이 시점의 LLM 산업은 다음과 같은 회계 모델 위에 있다.

```
구독 사용  = 인터랙티브 (사람이 직접 채팅)
자동화 사용 = 인터랙티브 풀에 합산되어 사실상 무료
```

이 구조는 파워유저에게 매우 유리하며, "월 20~200달러 구독료로 개인 자동화 서버 운용"이 가능한 마지막 기간이다.

## 영향받는 사용 패턴 (D-Day 이후 비용 부담 증가)

| 사용 패턴 | 현재 상태 |
| --- | --- |
| 스크립트에서 `-p`로 LLM 반복 호출 | 구독 한도 내 |
| cron/CI에 자동화 에이전트 연결 | 구독 한도 내 |
| MCP 서버에서 LLM 백엔드 호출 | 구독 한도 내 |
| 여러 에이전트 병렬 실행 | 구독 한도 내 |
| Agent SDK 기반 3rd party 도구 사용 | 구독 한도 내 |

## 관련 문서

- [[llm-subscription-policy-2026-06-upcoming|LLM 구독 정책 적용 예정 2026-06]]
- [[LLM Usage Economics|LLM 사용 경제학]]
- [[Harness Engineering|하네스 엔지니어링]]

---
title: "LLM 구독 정책 적용 예정 2026-06 (D-Day 이후)"
type: source
status: active
created: 2026-05-21
updated: 2026-05-21
tags: [llm-pricing, subscription, claude, gemini, codex, snapshot-2026-06]
source_url: https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/
source_path:
---

# LLM 구독 정책 적용 예정 2026-06 (D-Day 이후)

## 자료 개요

2026년 6월 중순에 시행될 LLM 구독·자동화 정책 변경 사항을 정리한 카드다. 자매 카드 [[llm-subscription-policy-2026-05-current|D-Day 이전 현황]]과 짝을 이루며, 이 카드는 변경 후 상태와 핵심 데이터 포인트에 집중한다.

## 핵심 D-Day

| 일자 | 공급자 | 변경 사항 |
| --- | --- | --- |
| 2026-04-02 | OpenAI Codex | 메시지 단위 → API 토큰 사용량 기준으로 과금 전환 (이미 적용 중) |
| 2026-06-15 | Anthropic Claude | `claude -p`와 Agent SDK가 월간 Agent SDK 크레딧으로 분리 |
| 2026-06-18 | Google Gemini | Gemini CLI·Code Assist IDE 확장이 개인 사용자 대상 요청 처리 중단 |

## 공급자별 변경 후 상세

### Anthropic Claude (2026-06-15 시행)

| 항목 | 변경 후 상태 |
| --- | --- |
| 채팅·Claude Code 대화형 | 기존 구독 한도 유지 |
| `claude -p` 비대화형 | **월간 Agent SDK 크레딧에서 차감** |
| Agent SDK 기반 도구 | **월간 Agent SDK 크레딧에서 차감** |
| Claude Code GitHub Actions | **월간 Agent SDK 크레딧에서 차감** |
| 3rd party 에이전트 앱 | **월간 Agent SDK 크레딧에서 차감** |
| Pro 플랜 크레딧 | $20 |
| Max 5x 플랜 크레딧 | $100 |
| Max 20x 플랜 크레딧 | $200 |
| 크레딧 차감 가격 | 표준 API 가격 |
| 이월 가능 여부 | 불가 (월말 소멸) |
| Extra usage 옵션 | 기본 OFF (켜면 한도 초과분 API 가격으로 자동 과금) |

### Google Gemini (2026-06-18 시행)

| 항목 | 변경 후 상태 |
| --- | --- |
| Gemini CLI 개인·Pro·Ultra 경로 | 요청 처리 중단 |
| Gemini Code Assist IDE 확장 | 개인 사용자 대상 요청 처리 중단 |
| 유료 Gemini API 키 | 유지 |
| Gemini Enterprise Agent Platform API 키 | 유지 |
| 후속 제품 | Antigravity CLI (Go 기반, 병렬 실행, 비공개 소스) |
| Antigravity 2.0 데스크톱 앱 | 호환 |
| 동시 진행 가격 변동 | Gemini 3.5 Flash가 2.5 Flash 대비 약 5배 입력 가격 인상 |

### OpenAI Codex (2026-04-02 적용 완료)

D-Day 이전 카드에 정리한 현황이 그대로 유지된다. 구독 플랜 내 토큰 기반 측정, 5시간/주간/페이고 3중 미터, 다중 제품(Codex + ChatGPT for Excel + Workspace Agents) 공유 풀 구조.

## 핵심 데이터 포인트 표

| 항목 | 값 | 1차 출처 |
| --- | --- | --- |
| Anthropic 발표 | 2026-05-14 | Help Center 15036540 |
| Anthropic 시행 | 2026-06-15 | 동일 |
| Pro / Max 5x / Max 20x 크레딧 | $20 / $100 / $200 | 동일 |
| 크레딧 이월 | 불가 | 동일 |
| Google 발표 | 2026-05-19 (I/O 2026) | Google Developers Blog |
| Gemini CLI 종료 | 2026-06-18 | 동일 |
| Gemini 3.5 Flash 가격 | 2.5 Flash 대비 약 5× input | I/O 2026 keynote |
| Codex 토큰 과금 전환 | 2026-04-02 | OpenAI Help Center 20001106 |
| Codex 공유 풀 | Codex + ChatGPT for Excel + Workspace Agents | OpenAI Help Center 11369540 |
| Pro 일일 안전 소진율 | 약 $0.67 미만 ($20 ÷ 30일) | 산출치 |

## 거시 명제 (변경 후)

```
인터랙티브 사용 = 구독 (사람이 채팅)
프로그래매틱 사용 = 크레딧 / API / 별도 쿼터
대량 반복 작업    = 로컬 LLM 또는 저가 모델
고급 판단 작업    = 프런티어 모델
```

이것은 단순 가격 인상이 아니라 **LLM 산업의 회계 모델이 SaaS에서 인프라(usage-based)로 옮겨가는 구조 전환**이다. 3대 랩이 거의 동시에 같은 방향으로 움직였다는 점에서 일시적 정책이 아닌 산업 표준 변경으로 본다.

## 1차 출처

- [Anthropic - Agent SDK overview](https://code.claude.com/docs/en/agent-sdk/overview)
- [Anthropic - Legal and compliance](https://code.claude.com/docs/en/legal-and-compliance)
- [Anthropic Help Center - Article 15036540](https://support.claude.com/hc/articles/15036540)
- [Google Developers Blog - Transitioning Gemini CLI to Antigravity CLI](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/)
- [OpenAI Help Center - Using Codex with your ChatGPT plan (Article 11369540)](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan)
- [OpenAI Help Center - Article 20001106 (Codex 토큰 과금 전환)](https://help.openai.com/en/articles/20001106)

## 관련 문서

- [[llm-subscription-policy-2026-05-current|LLM 구독 정책 현황 2026-05]]
- [[LLM Usage Economics|LLM 사용 경제학]]
- [[Harness Engineering|하네스 엔지니어링]]

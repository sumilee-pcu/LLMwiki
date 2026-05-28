---
title: "Perplexity 사업 아이디어 검증"
type: page
status: draft
created: 2026-05-28
updated: 2026-05-28
tags: [perplexity, deep-research, business-validation, market-research, startup, mvp, promptops]
sources:
  - "wiki/sources/perplexity-business-validation-2026-05-28.md"
  - "https://docs.perplexity.ai/docs/sonar/models/sonar-deep-research"
---

# Perplexity 사업 아이디어 검증

## 요약

Perplexity Deep Research를 활용하면 아이디어를 만들기 전에 시장성, 경쟁, 실제 지불 사례, 리스크, MVP 가능성을 빠르게 점검할 수 있다. 공식 문서상 Deep Research는 수백 개 출처 기반 조사, 시장 분석, 경쟁 정보, due diligence에 적합한 연구 모델로 설명되므로, 사업 아이디어 초기 선별에 잘 맞는다.

단, 이것은 "10분 만에 사업 성공을 검증"하는 방법이 아니라 "10분 만에 명백히 약한 아이디어를 걸러내는 방법"에 가깝다. 최종 검증은 고객 인터뷰, 랜딩 페이지, 결제 의사, 파일럿 판매로 이어져야 한다.

## 기본 흐름

| 단계 | 작업 |
| --- | --- |
| 1 | Perplexity Deep Research 모드를 실행한다. |
| 2 | 아이디어를 한 문장으로 정리한다. |
| 3 | 시장 검증 프롬프트를 넣는다. |
| 4 | 경쟁, 수요, 지불 사례, 리스크, MVP 난이도를 확인한다. |
| 5 | Build / Test / Avoid 중 하나로 결론을 받는다. |

## 아이디어 문장 템플릿

```text
I want to build [서비스] for [타겟] who struggle with [문제].
```

예시:

```text
I want to build an AI study planner for college students who struggle to manage exam prep.
```

한국어로는 이렇게 쓸 수 있다.

```text
[문제]로 어려움을 겪는 [타겟]을 위해 [서비스]를 만들고 싶다.
```

## 시장 검증 프롬프트

```text
Stress test this business idea:

Idea:
I want to build [서비스] for [타겟] who struggle with [문제].

Analyze it honestly and cite sources where possible.

1. Market need: Is this a real and frequent problem?
2. Target customer: Who exactly would care enough to try this?
3. Existing alternatives: What products, workflows, or manual workarounds already solve this?
4. Willingness to pay: Are there signs that customers already pay for similar solutions?
5. Competition: Is the market underserved, crowded, or dominated by strong incumbents?
6. Risks: What are the biggest reasons this idea could fail?
7. MVP: What is the smallest testable version I could build in 1-2 weeks?
8. Validation test: What landing page, interview, or concierge test should I run first?
9. Recommendation: Choose one: Build, Test, or Avoid. Explain why.

Be blunt. Start with risks and reasons not to build it.
```

## 한국어 프롬프트

```text
다음 사업 아이디어를 냉정하게 스트레스 테스트해줘.

아이디어:
[문제]로 어려움을 겪는 [타겟]을 위해 [서비스]를 만들고 싶다.

가능하면 출처를 인용해서 분석해줘.

1. 시장성: 이 문제가 실제로 자주 발생하는 문제인가?
2. 타겟 고객: 누가 가장 절실하게 필요로 하는가?
3. 기존 대안: 이미 어떤 제품, 서비스, 수작업 방식이 이 문제를 해결하고 있는가?
4. 지불 의사: 고객이 비슷한 문제 해결에 실제로 돈을 내고 있는 증거가 있는가?
5. 경쟁: 시장이 비어 있는가, 과포화인가, 강한 기존 사업자가 장악했는가?
6. 리스크: 이 아이디어가 실패할 가장 큰 이유는 무엇인가?
7. MVP: 1-2주 안에 만들 수 있는 최소 검증 버전은 무엇인가?
8. 검증 실험: 랜딩 페이지, 고객 인터뷰, 수동 대행 테스트 중 무엇을 먼저 해야 하는가?
9. 최종 추천: Build, Test, Avoid 중 하나를 골라라. 이유도 설명해라.

좋은 점보다 리스크와 만들지 말아야 할 이유를 먼저 말해줘.
```

## 판정 기준

| 판정 | 의미 | 다음 행동 |
| --- | --- | --- |
| Build | 시장·지불 의사·MVP 난이도가 모두 우호적 | 작게 만들고 첫 사용자에게 배포 |
| Test | 가능성은 있지만 핵심 가정이 검증되지 않음 | 인터뷰, 랜딩 페이지, 수동 대행 테스트 |
| Avoid | 수요 약함, 경쟁 과포화, 차별화 약함, 규제·데이터 리스크 큼 | 아이디어 폐기 또는 타겟/문제 재정의 |

## 중요 포인트

좋은 점보다 리스크를 먼저 본다. 사업 아이디어는 "가능해 보이는 이유"보다 "실제로 돈을 낼 사람이 있는가"가 더 중요하다.

경쟁이 있다는 사실 자체는 나쁜 신호가 아니다. 오히려 지불 의사 증거일 수 있다. 문제는 기존 대안보다 10배 낫거나, 더 좁은 고객군에 더 정확히 맞는 차별화가 있는지다.

MVP는 제품이 아니라 검증 실험이다. 로그인, 대시보드, 자동화 전체를 만들기 전에 수동 리서치, Notion 템플릿, Google Form, 랜딩 페이지, 상담형 서비스로 먼저 확인한다.

## 운영 루틴

| 주기 | 루틴 |
| --- | --- |
| 매주 | 아이디어 1개를 Deep Research로 검증 |
| 월 1회 | 비슷한 아이디어 2-3개를 비교해 가장 나은 타겟 선택 |
| 아이디어 저장 | Notion, Perplexity Space, LLMwiki source 카드에 결과 보관 |
| 실행 전 | `Build/Test/Avoid` 판정과 핵심 리스크를 한 줄로 기록 |

## LLMwiki 적용

이 패턴은 [[Vibe Coding Use Cases|바이브 코딩 활용 사례]]의 프로젝트 기획 단계와 연결된다. 바이브 코딩은 구현 속도를 크게 올리지만, 만들 가치가 없는 아이디어를 빠르게 만드는 위험도 키운다. 따라서 구현 전 Perplexity Deep Research로 시장성·경쟁·MVP를 점검하는 단계를 넣는다.

[[anti-fluff-custom-instructions|AI 답변 물타기 방지 모드]]와 함께 쓰면 더 좋다. Perplexity가 긍정적인 가능성만 늘어놓지 않도록 "리스크 먼저", "Build/Test/Avoid 중 하나 선택", "모르면 모른다고 표시"를 요구한다.

## 출처

- [[perplexity-business-validation-2026-05-28|Perplexity Deep Research 사업 아이디어 검증 메모 2026-05-28]]
- [Perplexity Docs - Sonar Deep Research](https://docs.perplexity.ai/docs/sonar/models/sonar-deep-research)

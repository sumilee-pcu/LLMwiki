---
title: "TradingAgents"
type: page
status: draft
created: 2026-05-18
updated: 2026-05-18
tags: [tradingagents, multi-agent, finance, local-ai, harness]
sources:
  - "wiki/sources/tradingagents-paper-2024.md"
---

# TradingAgents

## 요약

TradingAgents는 헤지펀드나 트레이딩 회사의 의사결정 구조를 LLM 멀티에이전트로 구현한 오픈소스 연구 프레임워크다. 핵심은 한 모델이 바로 거래 결정을 내리는 것이 아니라, 분석가, 연구자, 트레이더, 리스크 관리자, 포트폴리오 매니저 역할을 나누어 협업하게 만드는 것이다.

## 왜 흥미로운가

LLMwiki 관점에서 TradingAgents는 금융 프로젝트 그 자체보다 멀티에이전트 하네스의 참고 사례로 가치가 크다. 복잡한 의사결정을 다음처럼 나눈다.

1. 여러 분석가가 서로 다른 자료를 수집한다.
2. 상승 관점과 하락 관점 연구자가 토론한다.
3. 트레이더가 의사결정 초안을 만든다.
4. 리스크 팀이 노출과 위험을 점검한다.
5. 포트폴리오 매니저가 최종 승인한다.

이 구조는 금융뿐 아니라 논문 리뷰, 제품 기획, 법률/정책 검토, 기술 도구 평가에도 응용할 수 있다.

## 로컬 설치 가능성

2026-05-18 기준 저장소 클론과 구조 확인은 정상이다.

```bash
git clone https://github.com/TauricResearch/TradingAgents.git /Users/sumilee/2026/TradingAgents
cd /Users/sumilee/2026/TradingAgents
```

설치 조건:

- Python `>=3.10`
- `pip install .`
- CLI 실행: `tradingagents` 또는 `python -m cli.main`
- Ollama 사용 가능
- yfinance 기본 데이터 사용 가능
- Alpha Vantage 등 외부 데이터 API를 붙이면 더 넓은 데이터 사용 가능

로컬 검증 결과:

- `/Users/sumilee/2026/TradingAgents`에 클론 완료
- `.venv` 생성 후 `pip install -e .` 성공
- `import tradingagents` 성공
- Ollama URL, 모델 검증, 안전한 ticker 처리, API key 환경변수 관련 선별 테스트 통과
- 테스트 결과: `48 passed, 72 subtests passed`
- 전체 트레이딩 실행은 API 키, 외부 데이터 호출, 모델 비용 또는 로컬 모델 실행 시간이 필요하므로 아직 수행하지 않음

## 내 로컬 AI 환경과의 연결

현재 Mac에는 Ollama와 다음 모델이 준비되어 있다.

| 모델 | TradingAgents에서의 가능 역할 |
| --- | --- |
| `gemma3:27b` | 깊은 분석, 연구자/트레이더 역할 후보 |
| `gemma3n:e4b` | 빠른 뉴스/요약/중간 보고 후보 |
| `llama3.3:70b-instruct-q4_K_M` | 무거운 최종 판단 비교 후보 |
| `phi4:14b` | 규칙, 수치, 코드성 검토 후보 |

다만 실제 매매 판단에는 사용하지 않는다. 안전한 실험 범위는 과거 데이터 기반 분석, 프롬프트/역할 설계 검토, 의사결정 로그 구조 연구까지다.

## LLMwiki에 적용할 아이디어

TradingAgents의 구조는 LLMwiki 작업에도 응용 가능하다.

| TradingAgents 역할 | LLMwiki 응용 |
| --- | --- |
| Fundamentals Analyst | 원천 자료의 기본 사실 추출 |
| Sentiment / News Analyst | 외부 반응과 최신 동향 요약 |
| Bull Researcher | 장점, 기회, 채택 근거 정리 |
| Bear Researcher | 위험, 한계, 보안 문제 정리 |
| Risk Manager | 공개 가능성, 비용, 개인정보, 법적 리스크 점검 |
| Portfolio Manager | 최종 채택 여부와 다음 행동 결정 |

## 주의사항

- 투자 조언이나 자동매매 도구로 사용하지 않는다.
- 백테스트 결과는 미래 성과를 보장하지 않는다.
- LLM은 금융 데이터를 잘못 해석하거나 환각할 수 있다.
- 외부 API 키와 거래 계정 정보는 저장소에 넣지 않는다.
- 실험 결과는 `wiki/log.md` 또는 별도 실험 문서에 남긴다.

## 다음 작업

1. 별도 가상환경에서 `pip install .` 설치 테스트를 수행한다.
2. Ollama provider와 `gemma3n:e4b`로 가장 작은 분석 흐름을 실행해본다.
3. 실제 매매가 아니라 AAPL 같은 공개 종목의 과거 날짜 분석 보고서 생성만 테스트한다.
4. TradingAgents의 역할 구조를 LLMwiki 도구 평가 템플릿으로 변환한다.

## 출처

- [[tradingagents-paper-2024|TradingAgents 논문과 저장소]]

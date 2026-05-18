---
title: "TradingAgents 논문과 저장소"
type: source
status: draft
created: 2026-05-18
updated: 2026-05-18
tags: [tradingagents, multi-agent, finance, llm, harness]
source_url: "https://arxiv.org/abs/2412.20138"
source_path:
---

# TradingAgents 논문과 저장소

## 자료 개요

TradingAgents는 실제 트레이딩 회사의 의사결정 구조를 LLM 멀티에이전트 시스템으로 모사한 연구 프레임워크다. 논문은 2024년 12월 28일 arXiv에 처음 제출되었고, 현재 저장소는 Tauric Research가 Apache-2.0 라이선스로 공개하고 있다.

## 핵심 주장

단일 LLM이 곧바로 매수/매도 결정을 내리는 방식보다, 역할이 분리된 여러 에이전트가 자료를 수집하고 토론하고 위험을 검토한 뒤 최종 결정을 내리는 방식이 더 해석 가능하고 확장 가능하다는 주장이다.

## 에이전트 구조

| 역할 | 기능 |
| --- | --- |
| Fundamentals Analyst | 재무제표, 기업 펀더멘털, 내재가치와 위험 신호 분석 |
| Sentiment Analyst | 뉴스, StockTwits, Reddit 등에서 시장 심리 분석 |
| News Analyst | 거시경제와 글로벌 뉴스 이벤트 해석 |
| Technical Analyst | MACD, RSI 같은 기술지표 분석 |
| Bull / Bear Researcher | 상승 관점과 하락/위험 관점에서 구조화된 토론 |
| Trader Agent | 분석과 토론 결과를 종합해 거래 제안 생성 |
| Risk Management Team | 변동성, 유동성, 포지션 노출 등 위험 점검 |
| Portfolio / Fund Manager | 최종 승인 또는 거절 |

## 로컬 검증 메모

2026-05-18 기준 로컬에 `https://github.com/TauricResearch/TradingAgents.git`를 클론해 구조를 확인했다.

- 로컬 위치: `/Users/sumilee/2026/TradingAgents`
- 저장소 최신 확인 커밋: `61522e1 fix(llm): skip Anthropic effort kwarg on non-supporting models (#831)`
- 패키지 버전: `0.2.5`
- Python 요구사항: `>=3.10`
- 로컬 Python: `3.14.4`
- 주요 의존성: LangGraph, LangChain, yfinance, pandas, rich, typer, stockstats
- 실행 방식: CLI `tradingagents` 또는 `python -m cli.main`
- 로컬 모델: Ollama 지원. 기본 엔드포인트는 `http://localhost:11434/v1`
- 데이터 공급자: 기본값은 yfinance, Alpha Vantage도 선택 가능
- 설치 검증: `.venv`에서 `pip install -e .` 성공
- import 검증: `import tradingagents`와 `DEFAULT_CONFIG` 로딩 성공
- 선별 테스트: `tests/test_ollama_base_url.py`, `tests/test_model_validation.py`, `tests/test_safe_ticker_component.py`, `tests/test_api_key_env.py` 실행 결과 `48 passed, 72 subtests passed`

## LLMwiki 관점의 의미

TradingAgents는 금융 자동매매 도구라기보다, 하네스 엔지니어링과 멀티에이전트 설계를 공부하기 좋은 사례다. 특히 다음 점이 LLMwiki와 연결된다.

- 역할별 에이전트 분리
- 구조화된 보고서와 토론
- 위험 검토 단계의 명시적 분리
- 의사결정 로그와 체크포인트
- 로컬 Ollama 또는 여러 LLM 공급자와 연결 가능한 설계

## 주의사항

이 프레임워크는 연구 목적이다. 실제 투자, 자동매매, 재무 의사결정에 그대로 연결해서는 안 된다. 금융 데이터 품질, 모델 선택, 프롬프트, 기간, 온도, 백테스트 편향에 따라 결과가 크게 달라질 수 있다.

## 관련 문서

- [[TradingAgents|TradingAgents]]
- [[Harness Engineering|하네스 엔지니어링]]
- [[Local AI Workbench|로컬 AI 작업실]]

## 출처

- [GitHub - TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)
- [arXiv:2412.20138](https://arxiv.org/abs/2412.20138)
- [TradingAgents 프로젝트 페이지](https://tradingagents-ai.github.io/)

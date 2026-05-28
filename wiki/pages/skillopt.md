---
title: "SkillOpt"
type: page
status: draft
created: 2026-05-28
updated: 2026-05-28
tags: [skillopt, llm-agent, skill-optimization, text-space-optimization, promptops, codex, claude-code]
sources:
  - "wiki/sources/skillopt-2026-05-28.md"
  - "https://microsoft.github.io/SkillOpt/"
  - "https://github.com/microsoft/SkillOpt"
  - "https://arxiv.org/abs/2605.23904"
---

# SkillOpt

## 요약

SkillOpt는 Microsoft가 공개한 LLM 에이전트 skill 자동 최적화 프레임워크다. 핵심은 모델 가중치를 바꾸지 않고, 에이전트가 읽는 자연어 skill 문서를 학습 대상으로 삼는 것이다. 에이전트 실행 궤적을 수집하고, optimizer model이 성공·실패 사례를 분석해 작은 문서 수정을 제안하며, held-out validation 성능이 좋아질 때만 새 skill을 채택한다.

LLMwiki 관점에서 SkillOpt의 가치는 프롬프트 엔지니어링을 "감으로 고치는 문장 작업"에서 "검증 가능한 절차 학습 루프"로 옮긴 데 있다.

## 핵심 개념

| 개념 | 설명 | LLMwiki 적용 포인트 |
| --- | --- | --- |
| Text-space optimization | 모델 weight가 아니라 자연어 skill 문서를 최적화 | `AGENTS.md`, 작업 규칙, 프롬프트 라이브러리를 개선 대상으로 볼 수 있음 |
| Skill as external state | skill 문서를 에이전트의 외부 절차 기억으로 사용 | 한 번 쓰는 프롬프트가 아니라 재사용 가능한 운영 규칙으로 관리 |
| Validation-gated update | 검증 성능 향상 시에만 후보 skill 채택 | 문서·코드 규칙 자동 수정 시 regression 완화 |
| Bounded edit | add/delete/replace 단위의 제한된 수정 | 전체 재작성보다 작은 단위 개선으로 안정성 확보 |
| Rejected-edit buffer | 실패한 수정 방향을 기억 | 같은 실패 패턴 반복을 줄이는 negative feedback |
| `best_skill.md` artifact | 최종 배포 가능한 단일 skill 파일 | 복잡한 추가 런타임 없이 에이전트에 바로 연결 가능 |

## 학습 루프

SkillOpt의 루프는 신경망 학습의 은유를 텍스트 문서에 적용한다.

| 단계 | 의미 |
| --- | --- |
| Rollout | 현재 skill을 사용해 과제를 수행하고 실행 궤적과 점수를 남김 |
| Reflection | 성공·실패 사례를 분리해 반복 오류와 보존할 행동을 찾음 |
| Edit | optimizer model이 bounded add/delete/replace 수정을 제안 |
| Gate | held-out selection/validation split에서 성능이 좋아질 때만 채택 |
| Export | 검증된 최종 skill을 `best_skill.md`로 저장 |

중요한 점은 test split을 업데이트 채택에 쓰지 않는다는 것이다. 논문 기준으로 train split은 경험 수집, selection/validation split은 후보 채택, test split은 최종 보고에 사용된다.

## 성과 수치 메모

공식 프로젝트 페이지와 arXiv v2 논문 사이에 성능 수치가 일부 다르다.

| 기준 | GPT-5.5 Direct chat | GPT-5.5 Codex | GPT-5.5 Claude Code |
| --- | ---: | ---: | ---: |
| 프로젝트 페이지 | +23.5 | +21.8 | +18.6 |
| arXiv v2 초록 | +23.5 | +24.8 | +19.1 |

LLMwiki에서는 최신 논문 v2 기준인 direct chat +23.5, Codex +24.8, Claude Code +19.1을 우선 인용한다. 단, 프로젝트 페이지의 표 수치와 불일치한다는 메모를 함께 남긴다.

## Prompt Engineering과의 차이

| 구분 | 일반 프롬프트 개선 | SkillOpt식 skill optimization |
| --- | --- | --- |
| 수정 주체 | 사람 또는 단발 LLM | optimizer model |
| 근거 | 경험, 직관, 일부 예시 | scored rollout trajectory |
| 수정 범위 | 자유로운 재작성 가능 | bounded edit budget |
| 채택 기준 | 사람이 판단 | held-out validation gate |
| 산출물 | 프롬프트 또는 규칙 문서 | 검증된 `best_skill.md` |
| 위험 관리 | 수동 회귀 확인 | validation gate, rejected buffer, slow/meta update |

## LLMwiki 적용 방향

SkillOpt를 바로 재현하려면 train/selection/test split과 평가 가능한 benchmark가 필요하다. LLMwiki에서는 먼저 "Mini-SkillOpt 패턴"으로 적용하는 것이 현실적이다.

| 적용 대상 | 적용 방법 |
| --- | --- |
| Codex 작업 규칙 | `AGENTS.md` 변경 후보를 작은 diff로 만들고 `tools/wiki_lint.py` 통과와 실제 작업 성공 사례로 검증 |
| Cline PLAN/ACT 규칙 | 실패 로그를 모아 탐색·수정·검증 절차를 skill 파일로 정리 |
| Unity 게임 개발 과제 | 컴파일 성공, 씬 구성, NPC 대화 흐름, 코드 구조를 평가 항목으로 분리 |
| LLM NPC 설계 | 기억, 퀘스트 상태, JSON schema, 대화 일관성 규칙을 skill 문서화 |
| 논문·위키 작성 자동화 | 요약 형식, 인용 형식, 표 구성, 수치 팩트체크 규칙을 validation gate와 연결 |
| 로컬 LLM 실험 | Qwen/Gemma 계열 모델로 반복 초안을 만들고, 프런티어 모델이나 테스트셋으로 검증 |

## LLMwiki 운영에 주는 시사점

SkillOpt는 LLMwiki 운영 원칙과 잘 맞는다.

- `raw/`와 `wiki/sources/`는 rollout evidence와 검증 근거를 보존하는 역할을 한다.
- `wiki/pages/`는 검증된 절차 지식을 skill처럼 재사용하는 계층이 될 수 있다.
- `wiki/log.md`는 rejected edit와 의사결정 흔적을 남기는 최소한의 memory buffer로 쓸 수 있다.
- `tools/wiki_lint.py`는 validation gate의 가장 작은 형태다.

따라서 SkillOpt는 단순히 새 도구 하나를 추가하는 문제가 아니라, LLMwiki 자체를 "에이전트가 읽고 수정하고 검증하는 절차 지식 저장소"로 발전시키는 방향과 연결된다.

## 다음 작업

1. `AGENTS.md`를 대상으로 한 Mini-SkillOpt 실험 템플릿을 만든다.
2. 위키 문서 작성 실패 사례를 `wiki/log.md`에 구조화해 rejected-edit buffer처럼 활용한다.
3. `tools/wiki_lint.py`에 front matter, 출처 섹션, 외부 URL 점검을 추가해 validation gate를 강화한다.
4. Codex·Claude Code·Cline별 skill 파일 적용 방식을 비교표로 확장한다.

## 출처

- [[skillopt-2026-05-28|SkillOpt 공개와 논문 v2 팩트체크 2026-05-28]]
- [SkillOpt 프로젝트 페이지](https://microsoft.github.io/SkillOpt/)
- [microsoft/SkillOpt GitHub 저장소](https://github.com/microsoft/SkillOpt)
- [arXiv:2605.23904v2 - SkillOpt: Executive Strategy for Self-Evolving Agent Skills](https://arxiv.org/abs/2605.23904)

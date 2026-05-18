---
title: "LLMwiki를 위한 하네스 엔지니어링 적용안"
type: synthesis
status: draft
created: 2026-05-18
updated: 2026-05-18
tags: [harness-engineering, llmwiki, workflow]
sources:
  - "wiki/pages/harness-engineering.md"
---

# LLMwiki를 위한 하네스 엔지니어링 적용안

## 요약

LLMwiki는 이미 하네스 엔지니어링의 기본 요소를 갖추고 있다. `AGENTS.md`는 지침, `wiki/log.md`는 상태 기록, `tools/wiki_lint.py`는 검증, `raw/`와 `wiki/`의 분리는 작업 범위 제어에 해당한다.

앞으로의 목표는 이 구조를 더 명시적인 운영 체계로 발전시키는 것이다.

## 현재 갖춘 것

- 로컬 저장소 위치가 명확하다: `/Users/sumilee/2026/LLMwiki`
- 모든 주요 문서가 한국어 기반으로 정리되고 있다.
- 원천 자료와 해석 문서가 분리되어 있다.
- 에이전트 작업 규칙이 `AGENTS.md`에 있다.
- 위키 링크 점검 도구가 있다.
- 사람용 가이드북이 있다.

## 부족한 것

- 작업 시작 체크리스트가 아직 없다.
- 참고자료별 요약 카드가 아직 부족하다.
- GitHub 원격 저장소 배포가 아직 완료되지 않았다.
- front matter와 출처 섹션을 자동 검사하는 기능이 아직 약하다.

## 권장 운영 루틴

작업 시작 시:

```bash
cd /Users/sumilee/2026/LLMwiki
git status --short --branch
python3 tools/wiki_lint.py
```

작업 중:

- 새 자료는 `raw/`에 넣는다.
- 자료 요약은 `wiki/sources/`에 작성한다.
- 개념 문서는 `wiki/pages/`에 둔다.
- 여러 자료를 묶은 판단은 `wiki/synthesis/`에 둔다.

작업 종료 시:

```bash
python3 tools/wiki_lint.py
git status --short
git add .
git commit -m "작업 내용 요약"
```

## 결론

LLMwiki는 단순 노트 저장소가 아니라, LLM이 장기간 안정적으로 일할 수 있도록 돕는 하네스 저장소로 발전시킬 수 있다. 가장 중요한 다음 단계는 참고자료 요약 카드 축적과 GitHub 배포 문제 해결이다.

## 출처

- [[Harness Engineering|하네스 엔지니어링]]

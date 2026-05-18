# LLMwiki 에이전트 작업 지침

이 저장소는 LLM과 사람이 함께 관리하는 로컬 마크다운 위키입니다. `raw/`는 원천 자료, `wiki/`는 정리된 지식으로 다룹니다.

## 운영 규칙

- 원천 자료는 `raw/`에 보존합니다. 사용자가 명시적으로 요청하지 않는 한 원천 파일을 직접 고치지 않습니다.
- 마크다운 변경은 작고 검토 가능한 단위로 유지합니다.
- 검색은 `rg`, 로컬 검증은 `python3 tools/wiki_lint.py`를 우선 사용합니다.
- 주요 위키 문서는 front matter, 간결한 본문, `출처` 섹션을 포함해야 합니다.
- 의미 있는 구조 변경, 수집 판단, 미해결 질문은 `wiki/log.md`에 기록합니다.
- 모든 문서는 한국어를 기본으로 작성합니다. 원문 인용이나 고유명사가 필요한 경우에만 영어를 사용합니다.

## 일반 문서 템플릿

```markdown
---
title: "문서 제목"
type: page
status: draft
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: []
sources: []
---

# 문서 제목

## 요약

## 핵심 내용

## 관련 문서

## 출처
```

## 자료 요약 카드 템플릿

```markdown
---
title: "자료 제목"
type: source
status: draft
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: []
source_url:
source_path:
---

# 자료 제목

## 자료 개요

## 핵심 주장

## 유용한 내용

## 관련 문서
```

## 링크 방식

- 로컬 개념은 위키 링크를 우선 사용합니다: `[[개념 이름]]`.
- 외부 URL은 일반 마크다운 링크를 사용합니다.
- 파일명은 설명적이고 안정적으로 유지합니다.
- 링크 대상 문서가 아직 없으면 문서를 만들거나, 본문에 명확한 TODO를 남깁니다.

## 안정성 점검

커밋 전에는 다음 명령을 실행합니다.

```bash
python3 tools/wiki_lint.py
git status --short
```

# LLMwiki 상세 가이드북

작성일: 2026-05-18  
로컬 위치: `/Users/sumilee/2026/LLMwiki`  
원격 저장소: `https://github.com/sumilee-pcu/LLMwiki`

## 1. LLMwiki란?

LLMwiki는 LLM과 사람이 함께 관리하는 마크다운 기반 개인 지식 저장소입니다. 일반 메모장처럼 단순히 자료를 쌓는 것이 아니라, 원천 자료와 해석된 지식을 분리해서 보관하고, LLM이 계속 읽고 갱신할 수 있는 구조로 만듭니다.

핵심 아이디어는 세 가지입니다.

- 원천 자료는 `raw/`에 그대로 보관한다.
- LLM이 요약하고 연결한 지식은 `wiki/`에 정리한다.
- 중요한 판단, 변경, 미해결 질문은 `wiki/log.md`에 남긴다.

이 방식은 Andrej Karpathy의 LLM wiki 아이디어를 로컬 환경에 맞게 적용한 것입니다. 현재 구성은 별도 서버나 복잡한 패키지 없이, Python과 마크다운만으로 안정적으로 시작할 수 있게 설계했습니다.

## 2. 프로그램 위치

현재 LLMwiki는 다음 경로에 설치되어 있습니다.

```text
/Users/sumilee/2026/LLMwiki
```

터미널에서 이동하려면 다음 명령을 사용합니다.

```bash
cd /Users/sumilee/2026/LLMwiki
```

주요 파일 위치는 다음과 같습니다.

```text
/Users/sumilee/2026/LLMwiki/README.md
/Users/sumilee/2026/LLMwiki/AGENTS.md
/Users/sumilee/2026/LLMwiki/docs/guidebook.md
/Users/sumilee/2026/LLMwiki/raw/
/Users/sumilee/2026/LLMwiki/wiki/
/Users/sumilee/2026/LLMwiki/tools/wiki_lint.py
```

Obsidian에서 사용하려면 `/Users/sumilee/2026/LLMwiki` 폴더 전체를 vault로 열면 됩니다.

## 3. 전체 구조

```text
LLMwiki/
  README.md
  AGENTS.md
  docs/
    guidebook.md
  raw/
    README.md
    inbox/
    assets/
  wiki/
    index.md
    log.md
    pages/
    sources/
    synthesis/
  tools/
    wiki_lint.py
```

각 영역의 역할은 다음과 같습니다.

| 위치 | 역할 |
| --- | --- |
| `README.md` | 저장소의 빠른 소개와 기본 사용법 |
| `AGENTS.md` | Codex나 다른 LLM 에이전트가 따라야 할 작업 규칙 |
| `docs/guidebook.md` | 사람이 읽는 상세 사용 설명서 |
| `raw/inbox/` | 아직 정리하지 않은 원천 텍스트, 메모, 자료 |
| `raw/assets/` | PDF, 이미지, 첨부 파일 등 비마크다운 자료 |
| `wiki/index.md` | 전체 위키 색인 |
| `wiki/log.md` | 변경 이력, 판단 기록, 미해결 이슈 |
| `wiki/pages/` | 개념, 인물, 기술, 주제별 지식 문서 |
| `wiki/sources/` | 원천 자료별 요약 카드 |
| `wiki/synthesis/` | 여러 자료를 묶은 분석, 보고서, 종합 문서 |
| `tools/wiki_lint.py` | 위키 링크와 필수 파일을 점검하는 로컬 도구 |

## 4. 기본 사용 흐름

LLMwiki의 기본 운영 흐름은 자료 수집, 요약, 개념화, 종합, 검증의 순서입니다.

### 4.1 자료 넣기

새 자료를 받으면 먼저 `raw/`에 넣습니다.

텍스트나 마크다운 자료는 다음 위치에 둡니다.

```text
raw/inbox/
```

PDF, 이미지, 캡처 파일은 다음 위치에 둡니다.

```text
raw/assets/
```

중요한 점은 원천 자료를 바로 고치지 않는 것입니다. 오탈자 수정이나 요약은 `wiki/`에 따로 작성합니다. 이렇게 하면 나중에 LLM이 해석을 잘못했는지 원문과 비교할 수 있습니다.

### 4.2 자료 요약 카드 만들기

원천 자료 하나를 읽고 정리한 문서는 `wiki/sources/`에 둡니다.

예시:

```text
wiki/sources/karpathy-llm-wiki-gist.md
```

권장 형식은 다음과 같습니다.

```markdown
---
title: "자료 제목"
type: source
status: draft
created: 2026-05-18
updated: 2026-05-18
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

### 4.3 개념 문서 만들기

반복해서 등장하는 개념은 `wiki/pages/`에 정리합니다.

예시:

```text
wiki/pages/retrieval-augmented-generation.md
wiki/pages/model-context-protocol.md
wiki/pages/local-first-ai.md
```

개념 문서는 특정 자료 하나에 종속되지 않고, 여러 자료에서 반복해서 참조할 수 있게 씁니다.

### 4.4 종합 문서 만들기

여러 자료를 묶어서 분석하거나 보고서처럼 정리할 때는 `wiki/synthesis/`를 사용합니다.

예시:

```text
wiki/synthesis/local-llm-workflow.md
wiki/synthesis/public-api-agent-strategy.md
```

종합 문서는 LLMwiki의 가장 가치 있는 결과물입니다. 단순 요약이 아니라 자료 간 관계, 비교, 판단, 다음 행동을 정리합니다.

### 4.5 색인과 로그 갱신

새 문서가 중요하면 `wiki/index.md`에 연결합니다.

중요한 결정이나 구조 변경은 `wiki/log.md`에 남깁니다.

예시:

```markdown
## 2026-05-18

- 공공 API 관련 자료를 `raw/inbox/`에 추가했다.
- 반복 개념은 `wiki/pages/public-api-authentication.md`로 분리하기로 했다.
- 아직 인증키 관리 방식은 미정이다.
```

## 5. Codex에서 사용하는 법

Codex에게 작업을 맡길 때는 저장소 위치를 명확히 말하면 됩니다.

예시 요청:

```text
/Users/sumilee/2026/LLMwiki의 raw/inbox 자료를 읽고
wiki/sources에 자료별 요약 카드를 만들어줘.
중요 개념은 wiki/pages로 분리하고,
변경 사항은 wiki/log.md에 기록해줘.
마지막에 python3 tools/wiki_lint.py로 점검해줘.
```

또 다른 예시:

```text
LLMwiki에서 "MCP" 관련 문서를 찾아서
wiki/synthesis/mcp-overview.md로 종합 정리해줘.
출처는 출처 섹션에 남기고 index에도 연결해줘.
```

Codex는 `AGENTS.md`를 읽고 이 저장소의 규칙을 따를 수 있습니다. 그러므로 장기적으로는 “raw는 보존, wiki는 편집, log는 기록”이라는 운영 방식이 유지됩니다.

## 6. Obsidian에서 사용하는 법

Obsidian을 사용하면 LLMwiki를 시각적인 지식 그래프로 다룰 수 있습니다.

사용 순서:

1. Obsidian을 엽니다.
2. `Open folder as vault`를 선택합니다.
3. `/Users/sumilee/2026/LLMwiki`를 선택합니다.
4. `wiki/index.md`를 시작 페이지처럼 사용합니다.

위키 링크는 다음 형식을 사용합니다.

```markdown
[[Overview]]
[[Log]]
[[Retrieval Augmented Generation]]
```

링크 대상 문서가 아직 없으면 Obsidian에서 새 문서로 만들 수 있고, Codex에게 “깨진 위키 링크를 실제 문서로 만들어줘”라고 요청할 수도 있습니다.

## 7. 터미널 명령

가장 자주 쓰는 명령은 다음 두 가지입니다.

```bash
cd /Users/sumilee/2026/LLMwiki
python3 tools/wiki_lint.py
```

위키 안에서 검색할 때는 `rg`를 사용합니다.

```bash
rg "MCP" wiki raw
rg "OpenAI" wiki raw
rg "공공 API" wiki raw
```

Git 상태 확인:

```bash
git status --short
git log --oneline --decorate -5
```

커밋:

```bash
git add .
git commit -m "Update LLMwiki notes"
```

원격 저장소로 push:

```bash
git push -u origin main
```

현재 환경에서는 GitHub push 권한 문제가 확인되었습니다. 로컬 커밋은 정상적으로 가능하지만, GitHub에 올리려면 인증 계정 또는 저장소 권한을 먼저 확인해야 합니다.

## 8. 점검 도구 사용법

`tools/wiki_lint.py`는 현재 저장소에 포함된 간단한 검증 도구입니다.

실행:

```bash
python3 tools/wiki_lint.py
```

정상 결과:

```text
wiki_lint: ok (3 markdown files)
```

현재 점검하는 항목은 다음과 같습니다.

- 필수 파일 존재 여부
- `wiki/` 아래 마크다운 파일 목록
- `[[위키링크]]`가 실제 문서로 연결되는지 여부

예를 들어 `[[Missing Page]]`라는 링크가 있는데 대응하는 문서가 없으면 실패합니다. 이때 해결 방법은 두 가지입니다.

- 실제 문서를 만든다.
- 필요 없는 링크라면 삭제하거나 일반 텍스트로 바꾼다.

## 9. 기대 효과

LLMwiki를 꾸준히 사용하면 다음 효과를 기대할 수 있습니다.

### 9.1 자료가 사라지지 않는다

대화형 AI에게 물어본 답변은 시간이 지나면 흩어지기 쉽습니다. LLMwiki는 중요한 자료와 판단을 저장소에 남기므로, 나중에 다시 검색하고 확장할 수 있습니다.

### 9.2 원문과 해석이 분리된다

`raw/`는 원문 보존 영역이고 `wiki/`는 해석 영역입니다. 이 구조 덕분에 LLM의 요약이 틀렸거나 과장되었을 때 원천 자료로 되돌아갈 수 있습니다.

### 9.3 LLM 작업의 연속성이 좋아진다

LLM은 매번 처음부터 설명을 들어야 할 때가 많습니다. LLMwiki가 있으면 Codex에게 저장소를 읽게 해서 지금까지의 맥락, 용어, 판단을 빠르게 복원할 수 있습니다.

### 9.4 연구와 집필에 유리하다

논문, 강의안, 보고서, 프로젝트 기획처럼 장기간 축적되는 작업에 특히 좋습니다. 자료별 요약은 `wiki/sources/`, 개념은 `wiki/pages/`, 최종 논리는 `wiki/synthesis/`에 분리되므로 재사용성이 높아집니다.

### 9.5 Git으로 변경 이력이 남는다

중요한 변경은 커밋으로 남길 수 있습니다. 어떤 문서가 언제 추가되었는지, 어떤 판단이 바뀌었는지 추적할 수 있습니다.

## 10. 추천 운영 루틴

### 매일

- 새 자료를 `raw/inbox/`에 넣습니다.
- 중요한 자료 1~3개를 `wiki/sources/`로 요약합니다.
- `python3 tools/wiki_lint.py`를 실행합니다.

### 매주

- `wiki/index.md`를 정리합니다.
- 반복 개념을 `wiki/pages/`로 분리합니다.
- 여러 자료가 모인 주제는 `wiki/synthesis/`로 종합합니다.
- 의미 있는 단위로 커밋합니다.

### 프로젝트 종료 시

- 최종 종합 문서를 `wiki/synthesis/`에 만듭니다.
- 출처 누락 여부를 확인합니다.
- `wiki/log.md`에 최종 판단과 남은 과제를 기록합니다.

## 11. 좋은 문서 작성 원칙

좋은 LLMwiki 문서는 짧고, 출처가 있고, 연결되어 있습니다.

권장 원칙:

- 제목은 검색 가능한 말로 쓴다.
- 한 문서에는 하나의 중심 주제만 둔다.
- 출처가 있는 주장과 개인 판단을 구분한다.
- 긴 원문 복사는 피하고 요약과 링크를 남긴다.
- 관련 개념은 `[[위키링크]]`로 연결한다.
- 임시 문서는 `status: draft`, 정리된 문서는 `status: stable`로 표시한다.

## 12. 문서 상태값

front matter의 `status`는 다음처럼 사용합니다.

| 상태 | 의미 |
| --- | --- |
| `draft` | 초안, 아직 검증 전 |
| `review` | 검토 중 |
| `stable` | 현재 기준으로 신뢰 가능 |
| `archived` | 더 이상 적극적으로 갱신하지 않음 |
| `active` | 색인, 로그처럼 계속 운영되는 문서 |

## 13. 권장 front matter

일반 페이지:

```yaml
---
title: "문서 제목"
type: page
status: draft
created: 2026-05-18
updated: 2026-05-18
tags: []
sources: []
---
```

자료 요약 카드:

```yaml
---
title: "자료 제목"
type: source
status: draft
created: 2026-05-18
updated: 2026-05-18
tags: []
source_url:
source_path:
---
```

종합 문서:

```yaml
---
title: "종합 문서 제목"
type: synthesis
status: draft
created: 2026-05-18
updated: 2026-05-18
tags: []
sources: []
---
```

## 14. 실제 작업 예시

### 예시 1: 새 논문을 정리할 때

1. PDF를 `raw/assets/`에 넣습니다.
2. 논문 메모를 `raw/inbox/논문명.md`로 둡니다.
3. `wiki/sources/논문명.md`에 요약 카드를 만듭니다.
4. 핵심 개념을 `wiki/pages/`에 분리합니다.
5. 연구 주제와 연결되는 내용은 `wiki/synthesis/`에 정리합니다.

### 예시 2: 강의안을 준비할 때

1. 강의 자료와 참고 문헌을 `raw/`에 넣습니다.
2. 각 자료를 `wiki/sources/`에 요약합니다.
3. 학생에게 설명할 핵심 개념을 `wiki/pages/`에 씁니다.
4. 한 주차 강의 흐름은 `wiki/synthesis/`에 구성합니다.

### 예시 3: 프로젝트 기획을 할 때

1. 요구사항, 회의록, 참고 링크를 `raw/inbox/`에 넣습니다.
2. 각 자료의 핵심 요구사항을 `wiki/sources/`에 정리합니다.
3. 기능, 리스크, 결정 사항을 `wiki/pages/`에 분리합니다.
4. 전체 기획안은 `wiki/synthesis/project-plan.md`로 만듭니다.

## 15. 주의사항

- 비밀번호, API 키, 개인정보는 저장소에 넣지 않습니다.
- 원천 자료의 저작권을 확인합니다.
- LLM 요약은 항상 원문과 대조할 수 있게 출처를 남깁니다.
- GitHub에 push하기 전에 공개해도 되는 자료인지 확인합니다.
- 깨진 위키 링크를 방치하지 않습니다.

## 16. 현재 상태

현재 LLMwiki는 다음 상태입니다.

- 로컬 설치 완료
- 초기 구조 생성 완료
- 로컬 점검 도구 작동 확인
- 로컬 커밋 완료
- GitHub push는 권한 문제로 보류

최근 로컬 커밋:

```text
cd66ca7 Initialize LLM wiki structure
```

GitHub push 실패 원인:

```text
Permission to sumilee-pcu/LLMwiki.git denied
```

해결하려면 GitHub 인증 계정이 `sumilee-pcu/LLMwiki`에 push 권한을 가져야 합니다.

## 17. 다음 확장 방향

앞으로 확장할 수 있는 기능은 다음과 같습니다.

- `templates/` 디렉터리 추가
- 자료 수집 자동화 스크립트 추가
- PDF 텍스트 추출 파이프라인 추가
- front matter 검사 강화
- Obsidian 설정 파일 추가
- 주제별 대시보드 문서 추가
- GitHub Actions 기반 링크 검사 추가

초기에는 복잡한 자동화보다 작은 단위의 안정적인 운영이 더 중요합니다. 현재 구조는 원천 보존, 위키화, 검증, 커밋이라는 기본 사이클을 먼저 굳히는 데 초점을 둡니다.

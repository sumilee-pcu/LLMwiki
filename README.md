# LLMwiki

LLM이 읽고, 갱신하고, 검증하기 쉬운 개인 지식 위키입니다. 이 저장소는 Andrej Karpathy의 `llm wiki` gist 아이디어를 로컬 환경에 맞게 정리한 초기 골격입니다.

## 핵심 원칙

- `raw/`에는 원천 자료를 보관합니다. 가능하면 원문은 수정하지 않고, 출처와 수집 시점을 남깁니다.
- `wiki/`에는 LLM이 요약, 구조화, 연결한 문서를 둡니다.
- 각 문서는 front matter와 출처 섹션을 가져야 합니다.
- 변경은 작고 추적 가능하게 만들고, 중요한 판단은 `wiki/log.md`에 남깁니다.
- 검색은 우선 `rg`로 수행합니다. 현재 로컬 환경에는 `qmd`가 없으므로 의존성 없는 마크다운 위키로 시작합니다.

## 디렉터리

```text
raw/
  inbox/       새로 수집한 원천 자료
  assets/      이미지, PDF, 첨부 파일
apps/
  local-ai-workbench/  Ollama 로컬 모델과 위키 문맥을 연결하는 웹앱
wiki/
  index.md     전체 색인
  log.md       변경/판단 로그
  pages/       주제별 위키 문서
  sources/     원천 자료별 요약 카드
  synthesis/   여러 자료를 엮은 종합 문서
tools/
  wiki_lint.py 위키 링크와 필수 파일 점검
```

## 로컬 사용법

```bash
python3 tools/wiki_lint.py
rg "검색어" wiki raw
```

로컬 AI 웹앱 실행:

```bash
cd apps/local-ai-workbench
npm start
```

실행 후 `http://127.0.0.1:3100`에서 사용할 수 있습니다.

## Vercel 공개 페이지

Vercel에는 로컬 Ollama 실행기가 아니라 공개용 정적 가이드 페이지를 배포합니다. Vercel 서버에서는 내 Mac의 `127.0.0.1:11434` Ollama에 접근할 수 없기 때문입니다.

```bash
npm run build
```

빌드 결과는 `dist/`에 생성됩니다. Vercel 설정은 `vercel.json`에 들어 있으며, 루트 프로젝트 기준으로 `npm run build`를 실행하고 `dist`를 배포하도록 구성했습니다.

Obsidian에서 열 때는 `/Users/sumilee/2026/LLMwiki` 폴더를 vault로 지정하면 됩니다.

상세한 운영 방법, 기대 효과, 프로그램 위치는 [LLMwiki 상세 가이드북](docs/guidebook.md)을 참고하세요.

## 문서 작성 흐름

1. 원천 자료를 `raw/inbox/` 또는 `raw/assets/`에 넣습니다.
2. 자료별 요약 카드를 `wiki/sources/`에 만듭니다.
3. 재사용 가능한 개념은 `wiki/pages/`에 정리합니다.
4. 여러 자료를 묶은 해석은 `wiki/synthesis/`에 작성합니다.
5. 색인은 `wiki/index.md`, 중요한 판단은 `wiki/log.md`에 갱신합니다.

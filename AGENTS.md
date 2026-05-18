# LLMwiki Agent Instructions

This repository is a local LLM-maintained markdown wiki. Treat `raw/` as source material and `wiki/` as curated knowledge.

## Operating Rules

- Preserve source material in `raw/`. Do not rewrite raw files unless the user explicitly asks.
- Prefer small, reviewable markdown edits.
- Use `rg` for search and `python3 tools/wiki_lint.py` for local verification.
- Every substantial wiki page should include front matter, a concise body, and a `Sources` section.
- Record meaningful structural changes, ingestion decisions, and unresolved questions in `wiki/log.md`.
- Use Korean by default unless the source or user request calls for English.

## Page Template

```markdown
---
title: "Page Title"
type: page
status: draft
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: []
sources: []
---

# Page Title

## Summary

## Notes

## Links

## Sources
```

## Source Card Template

```markdown
---
title: "Source Title"
type: source
status: draft
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: []
source_url:
source_path:
---

# Source Title

## What It Is

## Key Claims

## Useful Excerpts

## Related Pages
```

## Link Style

- Prefer wiki links for local concepts: `[[Concept Name]]`.
- Prefer normal markdown links for external URLs.
- Keep filenames descriptive and stable.
- If a link target does not exist yet, either create the page or leave a clear TODO in the page.

## Stability Check

Before committing, run:

```bash
python3 tools/wiki_lint.py
git status --short
```


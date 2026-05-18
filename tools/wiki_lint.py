#!/usr/bin/env python3
"""Lightweight checks for the local markdown wiki."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WIKI = ROOT / "wiki"
REQUIRED = [
    ROOT / "README.md",
    ROOT / "AGENTS.md",
    WIKI / "index.md",
    WIKI / "log.md",
]
WIKILINK_RE = re.compile(r"\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]")


def slug(name: str) -> str:
    return name.strip().lower().replace(" ", "-")


def markdown_files() -> list[Path]:
    return sorted(WIKI.rglob("*.md"))


def known_targets(files: list[Path]) -> set[str]:
    targets: set[str] = set()
    for path in files:
        targets.add(path.stem.lower())
        targets.add(slug(path.stem))
    return targets


def main() -> int:
    errors: list[str] = []

    for path in REQUIRED:
        if not path.exists():
            errors.append(f"missing required file: {path.relative_to(ROOT)}")

    files = markdown_files()
    targets = known_targets(files)

    for path in files:
        text = path.read_text(encoding="utf-8")
        for match in WIKILINK_RE.finditer(text):
            target = match.group(1).strip()
            if target.lower() not in targets and slug(target) not in targets:
                errors.append(
                    f"broken wikilink in {path.relative_to(ROOT)}: [[{target}]]"
                )

    if errors:
        print("wiki_lint: failed")
        for error in errors:
            print(f"- {error}")
        return 1

    print(f"wiki_lint: ok ({len(files)} markdown files)")
    return 0


if __name__ == "__main__":
    sys.exit(main())


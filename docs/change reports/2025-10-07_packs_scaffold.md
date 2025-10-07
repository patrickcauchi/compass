# Change Brief #2 — Packs Scaffold (super_index.json + chunks_meta.jsonl)

## Request
Extend Tree-sitter setup to emit two metadata files under `/packs`:
- `super_index.json`: inventory of every `/src` file
- `chunks_meta.jsonl`: one JSON line per top-level declaration (function, class, const, export)

No dependency graph, hashing, or manifest required.

### Steps Provided
- Create: `tools/scan_basic.py` (main script)
- Create: `tools/extract_basic.py` (helper functions)
- Create: `/packs/` output directory
- Use Python 3.11.9, tree-sitter, tree-sitter-languages, jsonlines
- Scan only `/src/` (exclude `/tools/`, `/packs/`, `/agents/`, `/public/`)

## Actions Taken
1. Created `tools/extract_basic.py` with:
   - `iter_source_files`: finds all `.ts`/`.tsx` files in `/src`
   - `get_chunks`: extracts top-level declarations using Tree-sitter
2. Created `tools/scan_basic.py` with:
   - `build_super_index`: collects file info for `super_index.json`
   - Main routine to build both packs
3. Created `/packs` output directory
4. Installed `jsonlines==4.0.0` in the Python environment
5. Ran `python tools/scan_basic.py` — script executed without import or parser errors

## Output
- `/packs/super_index.json`: lists every `.ts`/`.tsx` file under `/src`
- `/packs/chunks_meta.jsonl`: one JSON object per top-level declaration
- Console output:
  - Example: `✅ Built 1 files → 2 chunks`
  - Timestamp: (UTC ISO format)

## Summary
- Scaffold for pack generation is complete
- Output files are readable, deterministic, and match inclusion policy
- No errors encountered
- Ready for next brief

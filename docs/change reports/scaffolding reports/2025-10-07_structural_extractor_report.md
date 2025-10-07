# Change Brief #6 — Structural Extractor (Tree-sitter Query Phase)

Date: 2025-10-07
Filed by: Architect Orbis
System: Compass Semantic Infrastructure v0.3.0

## Request
Upgrade the scanning system from file-level parsing to AST-level structural extraction using Tree-sitter queries. Output metadata for each function, React component, import, and JSX element, enabling semantic reasoning and validation.

## Actions Taken
- Implemented new module: `tools/extract_structural.py` (Tree-sitter AST walker)
- Updated `tools/scan_full.py` to use `extract_structural_metadata` for chunk extraction
- Regenerated packs: `chunks_meta.jsonl`, `super_index.json`, `dep_graph.json`, `pack_manifest.json`

## Output Files
- Extractor:
  - `tools/extract_structural.py`
- Updated:
  - `tools/scan_full.py`
- Packs (regenerated):
  - `packs/super_index.json`
  - `packs/chunks_meta.jsonl`
  - `packs/dep_graph.json`
  - `packs/pack_manifest.json`

## Verification
- Ran `.\.venv\Scripts\python tools\scan_full.py` — scan succeeded
- `chunks_meta.jsonl` now contains 24 structural chunks (multiple entries per file)
- Node types and symbol names appear correctly
- `super_index.json` and `dep_graph.json` remain stable
- Deterministic output confirmed

## Notes & Issues
- Initial scan failed due to missing `js` parser; fixed by switching to `typescript` for `.ts`/`.js` files
- Future: Add Tree-sitter query templates for each language (tsx, js, css)

## Next Steps
- Proceed to Change Brief #7 — Query Template Generation

## Commands Run (for reproducibility)
- Structural scan:
  - `.\.venv\Scripts\python tools\scan_full.py`

✅ Structural extractor implemented, packs updated, semantic recursion v1.0 confirmed.
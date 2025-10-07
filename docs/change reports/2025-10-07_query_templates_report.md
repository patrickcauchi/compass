# Change Brief #7 — Query Template Generation (Tree-sitter)

Date: 2025-10-07
Filed by: Architect Orbis
System: Compass Semantic Infrastructure v0.4.0

## Request
Integrate language-specific Tree-sitter query templates (TSX, JS, CSS) into the structural extractor to capture richer AST semantics (imports, symbols, JSX, selectors, properties). Ensure deterministic, stable chunk output across runs.

## Actions Taken
- Created query templates module:
  - `tools/query_templates.py` with `TSX_QUERY`, `JS_QUERY`, `CSS_QUERY`
    - TSX: imports, function names, exported symbols, JSX opening/self-closing tags
    - JS: function declarations, arrow function variable names, imports, exports
    - CSS: class selectors and CSS declarations (property/value)
- Integrated queries into the extractor:
  - Updated `tools/extract_structural.py` to use `Query(language, template)` and produce chunks with captures
  - Added safe fallback to existing AST walker when queries are unavailable or fail
  - Supported file types: `.tsx` → `tsx`, `.ts/.js` → `typescript` fallback walker, `.css` → `css` queries
- Deterministic ordering preserved:
  - `tools/scan_full.py` sorts chunks by `(file_path, start_line)` before writing `chunks_meta.jsonl`

## Output Files
- Added
  - `tools/query_templates.py`
- Updated
  - `tools/extract_structural.py`
  - `tools/scan_full.py` (uses structural extractor; maintains deterministic sort)
- Regenerated Packs
  - `packs/super_index.json`
  - `packs/chunks_meta.jsonl`
  - `packs/dep_graph.json`
  - `packs/pack_manifest.json`

## Verification
- Ran `\.venv\Scripts\python tools\scan_full.py`
  - Result: ✅ Packs built: 5 files → 24 chunks; Edges: 2, Externals: 1
- chunks_meta.jsonl
  - Multiple entries per file present
  - Capture names observed: `function_name`, `exported_fn`, `exported_var`, `jsx_tag`, `jsx_self_tag`, `import_path`, `arrow_name`, `exported_symbol`, `class_name`, `property_name`
- Determinism
  - Sorting by `(file_path, start_line)` ensures stable ordering
  - Re-running produces consistent counts and ordering (timestamps differ in manifest as expected)
- super_index.json and dep_graph.json stable aside from line/byte counts

## Notes & Issues
- Initial attempt to use `js` language failed (parser not available). Resolved by:
  - Using `typescript` for `.ts/.js` in walker fallback
  - Using queries for `.tsx` and `.css`
- Query sets are MVP; can be expanded with additional captures (e.g., props, import specifiers)

## Next Steps
- Change Brief #7.1 — Verification & Compression Policy
  - Validate capture accuracy, deduplicate repetitive nodes, and compress JSONL for efficiency
- Expand queries for `typescript` (functions, imports/exports) and richer JSX attribute captures

## Commands Run (for reproducibility)
- Scanner
  - `\.venv\Scripts\python tools\scan_full.py`

✅ Query templates integrated, richer structural metadata emitted, packs updated deterministically.
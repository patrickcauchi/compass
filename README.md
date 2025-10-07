# Compass

Compass is a deterministic, brief-driven codebase management and metadata generation system, designed for reproducibility, clarity, and minimalism. It leverages Tree-sitter for robust code parsing and outputs self-describing metadata packs for ingestion by Architect Orbis.

## Quickstart (App)

1. Install dependencies
2. Run the dev server
3. Regenerate semantic packs

### Scripts

- `npm run dev` – Start Next.js dev server
- `python tools/scan_full.py` – Regenerate packs


## Features
- **Brief-driven automation:** All changes are initiated by explicit Change Briefs.
- **Tree-sitter parsing:** Accurate AST extraction for TypeScript/TSX source files.
- **Pack generation:** Emits four key metadata artifacts:
  - `super_index.json`: Inventory of all `/src` files
  - `dep_graph.json`: Import relationships between source files
  - `chunks_meta.jsonl`: One JSON object per top-level declaration
  - `pack_manifest.json`: Top-level summary (counts, timestamps, schema version)
- **Source inclusion policy:** Only scans `/src` (excludes `/tools/`, `/packs/`, `/agents/`, `/public/`).
- **Reporting:** Each change brief is documented in `/docs/reports/`.

## Getting Started
1. Clone the repository:
   ```sh
   git clone https://github.com/patrickcauchi/compass.git
   cd compass
   ```
2. Create and activate a Python virtual environment:
   ```sh
   python -m venv .venv
   # Windows:
   .venv\Scripts\activate
   # macOS/Linux:
   source .venv/bin/activate
   ```
3. Install dependencies:
   ```sh
   pip install tree-sitter==0.21.3 tree-sitter-languages==1.10.2 jsonlines==4.0.0
   ```
4. Run pack generation:
   ```sh
   python tools/scan_full.py
   ```

## Project Structure
- `/src/` — Application source code (TypeScript/TSX)
- `/tools/` — Python scripts for scanning and pack generation
- `/packs/` — Output metadata artifacts
- `/docs/reports/` — Change brief reports
- `/agents/` — Project identity and logic prompts

## Principles
- Determinism, clarity, minimalism
- AST integrity at all times
- No speculative changes; only brief-driven

## License
MIT

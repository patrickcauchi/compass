# 🧩 The Compass Semantic Workflow (ContextBridge-inspired)

## 1. Tree-sitter Parsing Phase
- `tree-sitter` parses the entire codebase (JS/TS/HTML/CSS as needed).
- Output: a structured AST from which *chunk-level metadata* is extracted.
- No code content is included in these outputs (metadata-only pass).
- Each chunk is identified, hashed (e.g., BLAKE3), and linked to file-level hierarchy.

## 2. Pack Generation Phase
The system writes a `/packs/` folder with the **4 canonical files**:

### 🧱 `super_index.json`
- High-level map of all files/modules.
- Fields: `path`, `lang`, `lines`, `category`, `rank`, `lastModified`, etc.
- Used by Architect for “what exists and what matters.”

### 🔗 `dep_graph.json`
- Directed import/export graph.
- Each node = file/module; each edge = dependency direction.
- Used by Architect to reason about architectural flow and cohesion.

### 🧩 `chunks_meta.jsonl`
- Newline-delimited metadata of each AST chunk.
- Fields: `chunk_id`, `file_path`, `lang`, `lines`, `symbols`, `imports`, `docstring`, etc.
- Used by Developer and Architect to reason about *structure* and *intent* of code, not its body.

### 📜 `pack_manifest.json`
- Top-level manifest for bookkeeping and reproducibility.
- Fields: repo digest, schema version, build timestamp, artifact list.
- Always sent with every pack to confirm provenance.

Together, these 4 files form the **Architect’s synthetic context window** — allowing reasoning, dependency mapping, and system-level editing **without any raw code**.

---

## 🔄 Operational Cycle

1. **Developer Copilot edits code** per Change Brief.
2. **Tree-sitter scanner** re-parses changed files → regenerates packs.
3. **Architect Orbis** receives updated packs (metadata only).
4. Architect reasons semantically → writes next Change Brief.
5. Developer implements again.
6. Repeat — deterministic recursion loop.

This restores Context Bridge’s *semantic recursion principle* — recursive improvement through deterministic metadata updates.

---

## 🧠 Integration into Identity Prompts

### Architect Orbis Additions
- Must always interpret pack data before reasoning about structure or edits.
- Never require direct code access; operate purely from metadata.
- Responsible for **Change Brief precision** and metadata validation.
- Philosophically treats metadata as the “nervous system” of the codebase.

### Developer Copilot Additions
- Must maintain AST integrity (don’t break parseability).
- Must trigger re-scan after commits to regenerate updated packs.
- Cannot modify `/packs/` outputs manually — only via regeneration script.
- Reports successful rebuild with new pack digest.

---

## 📁 Folder Architecture (Summary)
```
/compass
 ├── /src
 │    ├── app/
 │    ├── components/
 │    └── utils/
 ├── /packs
 │    ├── super_index.json
 │    ├── dep_graph.json
 │    ├── chunks_meta.jsonl
 │    └── pack_manifest.json
 ├── /agents
 │    ├── identity_orbis.md
 │    └── identity_copilot.md
 ├── ARTIFACT_SPEC.md
 ├── package.json
 └── README.md
```

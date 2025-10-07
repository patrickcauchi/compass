# 🧠 Compass Semantic Optimisation Path

**Objective:**  
Strengthen Compass’s semantic recursion layer before new UI or data features.

---

## 🧩 Overview
Enhance the four core packs (`super_index.json`, `dep_graph.json`, `chunks_meta.jsonl`, `pack_manifest.json`) for determinism, reproducibility, and richer reasoning.

---

## 🔢 Optimisation Steps

1️⃣ **Path Normalisation**  
- Convert all paths to POSIX (`/`), remove `..` and backslashes.  
- Canonicalise imports (resolve aliases).  

2️⃣ **Schema v1.1**  
- Add `file_digest` + `chunk_digest` (BLAKE3).  
- Add `tooling` block: scanner, tree-sitter, language versions.  

3️⃣ **Editable vs Frozen Ranges**  
- Mark `status` per chunk (`editable` | `frozen`).  
- Optional `editable_ranges` for fine-grained control.  

4️⃣ **Deterministic JSON Writer**  
- Sort keys, stable arrays, newline at EOF, UTC timestamps.  

5️⃣ **Dep Graph Enrichment**  
- Add edge types (`import`, `dynamicImport`, `reExport`, `cssImport`).  
- External nodes as `external:*`.  

6️⃣ **Query Templates v2**  
- Capture export functions, React components, hooks, and docstrings.  

7️⃣ **Budgets & Pruning Policy**  
- Enforce size caps (1.5 MB chunks_meta, 300 KB dep_graph, 200 KB super_index).  

8️⃣ **Provenance & Reproducibility**  
- Manifest includes git commit, dirty flag, config hashes, and pack digests.  

9️⃣ **CLI Verification Switch + CI Hook**  
- `python tools/scan_full.py --verify` → compare digests and schema.  
- `npm run packs:verify` → used in GitHub Actions to block divergent packs.  

10️⃣ **Mock Data Schema Validation**  
- `data/mock/indicators.json` + `tools/validate_data.py` for type checking.  

---

## 🧱 Implementation Order
1. Path Normalisation  
2. Schema v1.1 (digests + tooling)  
3. Dep Graph edge types  
4. Deterministic writer  
5. Editable/Frozen flags  
6. Budgets + Pruning  
7. Provenance block  
8. CLI verify + CI hook  
9. Query Templates v2  
10. Mock data schema validation  

---

## ✅ Expected Outcome
- Deterministic pack generation across OSes.  
- Byte-identical rebuilds = true semantic recursion.  
- Orbis and Copilot can operate with fine-grained context and verification.  

**Status:** To commence post-Batch 8.5  
**Lead:** Architect Orbis  
**Compatibility:** Context Bridge Protocol CB-3.0

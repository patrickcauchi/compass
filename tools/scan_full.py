from pathlib import Path
import json, jsonlines
from datetime import datetime
from extract_basic import iter_source_files, get_chunks, get_imports

def build_super_index(files):
    items = []
    for p in files:
        text = p.read_text(encoding="utf-8")
        lines = text.count("\n") + 1
        bytes_ = len(text.encode("utf8"))
        category = "components" if "components" in p.parts else "app"
        items.append({
            "path": str(p),
            "lang": p.suffix.lstrip('.'),
            "lines": lines,
            "bytes": bytes_,
            "category": category
        })
    return items

def build_dep_graph(files):
    nodes = [str(f) for f in files]
    edges, externals = [], set()
    for p in files:
        for spec in get_imports(p):
            if spec.startswith("."):
                # local relative import
                target = (p.parent / spec).with_suffix(".tsx")
                if not target.exists():
                    target = (p.parent / spec).with_suffix(".ts")
                if target.exists():
                    edges.append([str(p), str(target)])
            else:
                externals.add(spec)
    return {"nodes": nodes, "edges": edges, "externals": sorted(list(externals))}

def build_manifest(files, chunks_count):
    return {
        "schemaVersion": 1,
        "builtAt": datetime.utcnow().isoformat() + "Z",
        "counts": {"files": len(files), "chunks": chunks_count},
        "artifacts": [
            "super_index.json",
            "dep_graph.json",
            "chunks_meta.jsonl"
        ],
        "notes": "Compass pack scaffold v0.1.0 — deterministic, no hashes"
    }

def main():
    out_dir = Path("packs"); out_dir.mkdir(exist_ok=True)
    files = iter_source_files("src")

    # super_index
    super_index = build_super_index(files)
    (out_dir / "super_index.json").write_text(json.dumps(super_index, indent=2))

    # dep_graph
    dep_graph = build_dep_graph(files)
    (out_dir / "dep_graph.json").write_text(json.dumps(dep_graph, indent=2))

    # chunks_meta
    all_chunks = []
    for p in files:
        all_chunks.extend(get_chunks(p))
    with jsonlines.open(out_dir / "chunks_meta.jsonl", mode="w") as writer:
        for c in all_chunks: writer.write(c)

    # manifest
    manifest = build_manifest(files, len(all_chunks))
    (out_dir / "pack_manifest.json").write_text(json.dumps(manifest, indent=2))

    print(f"✅ Packs built: {len(files)} files → {len(all_chunks)} chunks")
    print(f"Edges: {len(dep_graph['edges'])}, Externals: {len(dep_graph['externals'])}")

if __name__ == "__main__":
    main()

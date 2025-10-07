from pathlib import Path
import json, jsonlines
from datetime import datetime
from extract_basic import iter_source_files, get_chunks

def build_super_index(files):
    """Collect basic file info for super_index.json."""
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

def main():
    out_dir = Path("packs"); out_dir.mkdir(exist_ok=True)
    files = iter_source_files("src")

    # super_index
    super_index = build_super_index(files)
    (out_dir / "super_index.json").write_text(json.dumps(super_index, indent=2))

    # chunks_meta
    all_chunks = []
    for p in files:
        all_chunks.extend(get_chunks(p))
    with jsonlines.open(out_dir / "chunks_meta.jsonl", mode="w") as writer:
        for c in all_chunks:
            writer.write(c)

    print(f"✅ Built {len(files)} files → {len(all_chunks)} chunks")
    print("Timestamp:", datetime.utcnow().isoformat())

if __name__ == "__main__":
    main()

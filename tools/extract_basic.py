from tree_sitter_languages import get_parser
from pathlib import Path

def iter_source_files(root="src", exts=(".ts", ".tsx", ".css")):
    """Return all TypeScript, TSX, and CSS files under /src."""
    return [p for p in Path(root).rglob("*") if p.suffix in exts]

def get_chunks(path: Path):
    """Extract simple top-level declarations using Tree-sitter."""
    parser = get_parser("tsx" if path.suffix == ".tsx" else "typescript")
    text = path.read_text(encoding="utf-8")
    tree = parser.parse(text.encode("utf8"))
    root = tree.root_node

    chunks = []
    for child in root.children:
        if child.type in ("function_declaration", "class_declaration", "lexical_declaration", "export_statement"):
            start, end = child.start_point[0] + 1, child.end_point[0] + 1
            chunks.append({
                "chunk_id": f"{path.name}:{start}-{end}",
                "file_path": str(path),
                "lang": path.suffix.lstrip('.'),
                "kind": child.type,
                "start_line": start,
                "end_line": end
            })
    return chunks

def get_imports(path):
    """Return list of local and external import specifiers."""
    from tree_sitter_languages import get_parser
    parser = get_parser("tsx" if path.suffix == ".tsx" else "typescript")
    text = path.read_text(encoding="utf-8")
    tree = parser.parse(text.encode("utf8"))
    root = tree.root_node

    imports = []
    for node in root.children:
        if node.type == "import_statement":
            # find the quoted string at the end of the statement
            for child in node.children:
                if child.type == "string":
                    raw = text[child.start_byte + 1 : child.end_byte - 1]
                    imports.append(raw)
    return imports



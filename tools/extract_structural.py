import jsonlines
from tree_sitter import Parser, Query
from tree_sitter_languages import get_language
from pathlib import Path
from query_templates import TSX_QUERY, JS_QUERY, CSS_QUERY

def extract_structural_metadata(file_path: str):
    if file_path.endswith(".tsx"):
        lang = "tsx"
    elif file_path.endswith(".ts") or file_path.endswith(".js"):
        lang = "typescript"
    elif file_path.endswith(".css"):
        lang = "css"
    else:
        lang = "tsx"  # fallback for now
    language = get_language(lang)
    parser = Parser()
    parser.set_language(language)

    src = Path(file_path).read_text(encoding="utf-8")
    tree = parser.parse(bytes(src, "utf8"))
    root = tree.root_node

    chunks = []

    def walk(node, depth=0):
        # capture high-level structure only
        if node.type in {"function_declaration", "export_statement", "jsx_element", "export_default_declaration"}:
            # Try to extract symbol names if present
            symbols = []
            for child in node.children:
                if child.type == "identifier":
                    symbols.append(src[child.start_byte:child.end_byte])
            chunk = {
                "file_path": file_path,
                "node_type": node.type,
                "symbols": symbols,
                "start_line": node.start_point[0] + 1,
                "end_line": node.end_point[0] + 1,
                "depth": depth,
            }
            chunks.append(chunk)
        for child in node.children:
            walk(child, depth + 1)

    # Query-based extraction where available
    lang_key = "tsx" if file_path.endswith(".tsx") else ("js" if file_path.endswith(".js") else ("css" if file_path.endswith(".css") else None))
    QUERY_MAP = {"tsx": TSX_QUERY, "js": JS_QUERY, "css": CSS_QUERY}
    query_src = QUERY_MAP.get(lang_key)

    if query_src:
        try:
            query = Query(language, query_src)
            captures = query.captures(root)
            for node, name in captures:
                chunk = {
                    "file_path": file_path,
                    "node_type": node.type,
                    "symbols": [src[node.start_byte:node.end_byte]] if name in ("function_name", "exported_fn", "exported_var", "arrow_name", "exported_symbol", "jsx_tag", "jsx_self_tag", "class_name", "property_name") else [],
                    "capture": name,
                    "start_line": node.start_point[0] + 1,
                    "end_line": node.end_point[0] + 1,
                    "depth": 0,
                }
                chunks.append(chunk)
        except Exception:
            # Fallback to walker if query fails
            walk(root)
    else:
        # Fallback to walker for types without queries (e.g., .ts using typescript)
        walk(root)

    return chunks

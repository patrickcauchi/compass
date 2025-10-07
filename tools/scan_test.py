from tree_sitter_languages import get_parser
import pathlib

def main():
    parser = get_parser("tsx")
    sample_path = pathlib.Path("src/app/page.tsx")

    if not sample_path.exists():
        print("⚠️ No sample file found at", sample_path)
        return

    text = sample_path.read_text(encoding="utf-8")
    tree = parser.parse(bytes(text, "utf8"))
    root = tree.root_node

    print("✅ Tree-sitter parsed:", sample_path)
    print("Root node type:", root.type)
    print("Total children:", len(root.children))

if __name__ == "__main__":
    main()

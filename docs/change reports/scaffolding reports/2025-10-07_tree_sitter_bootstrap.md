# Change Brief #1 — Tree-sitter Bootstrap (Python venv)

## Request
Install Tree-sitter and verify that it can parse a `.tsx` source file. No pack generation or metadata required for this brief.

### Steps Provided
- Create new file: `tools/scan_test.py`
- Set up Python virtual environment
- Install locked versions: `tree-sitter==0.21.3`, `tree-sitter-languages==1.10.2`
- Add minimal script to parse `src/app/page.tsx`
- Run script to confirm parser works

## Actions Taken
1. Created Python virtual environment in project root (`.venv`).
2. Installed required packages in the environment.
3. Added `tools/scan_test.py` with the following contents:

```python
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
```

4. Created sample TSX file at `src/app/page.tsx`:

```tsx
import React from "react";

export default function Page() {
  return (
    <main>
      <h1>Hello, Tree-sitter!</h1>
      <p>This is a sample TSX file for parser testing.</p>
    </main>
  );
}
```

5. Ran the script. Output:
```
✅ Tree-sitter parsed: src\app\page.tsx
Root node type: program
Total children: 2
```

## Summary
- Environment and dependencies installed as requested
- Script and sample file created
- Tree-sitter parser confirmed working for TSX
- No import or parser errors
- Ready for next brief

# tools/query_templates.py
# Compass v0.4.0 — Language-specific Tree-sitter queries

TSX_QUERY = r"""
; Imports
(import_statement (string) @import_path)

; Functions and exports
(function_declaration name:(identifier) @function_name)
(export_statement (function_declaration name:(identifier) @exported_fn))
(export_statement (lexical_declaration (variable_declarator name:(identifier) @exported_var)))

; JSX tags
(jsx_opening_element name:(identifier) @jsx_tag)
(jsx_self_closing_element name:(identifier) @jsx_self_tag)
"""

JS_QUERY = r"""
(function_declaration name:(identifier) @function_name)
(variable_declaration (variable_declarator name:(identifier) @arrow_name value:(arrow_function)))
(import_statement (string) @import_path)
(export_statement (identifier) @exported_symbol)
"""

CSS_QUERY = r"""
(class_selector (class_name) @class_name)
(declaration property:(identifier) @property_name value:(value) @property_value)
"""

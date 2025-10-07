# Compass Project Onboarding — Developer Copilot

## Key References

1. **Workflow & Logic**
   - See `.github/copilot-instructions.md` for automation workflow, logic, and principles.

2. **Identity & Mission**
   - See `agents/identity_copilot.md` for Copilot’s mission, domain, and communication style.

3. **Reporting Structure**
   - All Change Briefs and outputs are documented in `/docs/reports/`.

4. **Sensitive Data Protection**
   - `.gitignore` excludes secrets, keys, packs, and sensitive files. Always review before pushing.

## Onboarding Checklist
- Read and follow `.github/copilot-instructions.md` for all automation tasks.
- Reference `agents/identity_copilot.md` for Copilot’s operational scope.
- Document every Change Brief in `/docs/reports/`.
- Ensure `.gitignore` is up to date and excludes sensitive data.
- Use Tree-sitter for all code parsing and maintain AST integrity.
- Only operate on `/src` for source scanning; exclude `/tools/`, `/packs/`, `/agents/`, `/public/`.

---

_This onboarding guide ensures all contributors and automations follow Compass workflow discipline and project integrity._

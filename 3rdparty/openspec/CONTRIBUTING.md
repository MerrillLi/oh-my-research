# Contributing to this OpenSpec Fork

Thank you for helping improve this fork.

## Workflow

- Keep changes small and grouped by purpose.
- Update docs together with behavior changes.
- Use `npm run build` to validate the CLI builds after code changes.
- Prefer keeping custom workflows backward compatible with upstream behavior unless release notes explicitly mark a breaking change.

## Code layout

- `src/`: TypeScript source for the CLI, workflows, and adapters.
- `docs/`: Operator documentation for installation, customization, and distribution.
- `schemas/`: OpenSpec schema definitions.
- `skills/`: Bundled skill packs shipped with this fork.

## PR checklist

- Add/update tests when behavior changes.
- Ensure no unrelated refactors are mixed into one change.
- If you changed skill-loading behavior, include:
  - `docs/custom-skill-packs.md`
  - A sample usage in changelog or PR description

## Release checklist

1. Sync lockfile after dependency or metadata changes.
2. Run:
   ```bash
   npm run build
   ```
3. Run install smoke test:
   ```bash
   openspec --version
   ```
4. Update `docs/fork-and-release.md` when publish/install docs change.

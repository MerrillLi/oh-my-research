# Forking and releasing this OpenSpec distribution

This repository is currently wired for development in this monorepo setup, and can be published as an independent open-source distribution.

## What this fork includes

- A customized OpenSpec source tree with changed `/opsx:*` workflows
- Bundled skill packs in `skills/*`
- `openspec init` / `openspec update` logic that syncs both project-local and bundled skill packs automatically

## Prepare a standalone release repo (recommended)

1. Create a new GitHub repo for your forked OpenSpec (for example `github.com/<your-org>/openspec`).
2. Point the package repo to that origin and push the current working tree once the edits are finalized.
3. Ensure `package.json` metadata (`name`, `homepage`, `repository`) matches your target namespace.
4. Add release notes for behavior changes (especially workflow and skill-pack updates).

## Local validation before publish

```bash
cd /path/to/this/fork/3rdparty/openspec
npm run build
npm install -g .
openspec --version
```

## Publish to npm (optional)

```bash
npm publish --access public
```

Use a scoped package name for safety (for example `@your-org/openspec-superpowers`).

## GitHub-only consumption (without npm publish)

For teams that prefer Git source distribution, install directly:

```bash
npm install -g git+https://github.com/<your-org>/openspec.git
```

## Recommended release flow

1. Update code and docs together.
2. Rebuild package artifacts.
3. Commit changes in the fork repository.
4. Tag a release.
5. Update the fork name/version in downstream installation docs.

# Custom skill packs in this OpenSpec distribution

## Why

We keep this repository open-source ready not only for OpenSpec core command logic, but also for team-specific skill packs that make `/opsx:*` usable in real engineering workflows.

This distribution loads skill packs in two ways:

- Project local packs: `./skills/*` under the initialized project
- Bundled packs shipped with this distribution: `<openspec-package>/skills/*`

When `openspec init` or `openspec update` runs, both sources are scanned and copied into the target AI tool's skill folder. Project-local packs take precedence when names collide.

## What counts as a skill pack

A folder is considered a skill pack when it:

- is a directory directly under a configured `skills` directory
- contains `SKILL.md`

By design, only manifest-based directories are synced to keep noise and accidental folders out of the install.

## Current bundled packs

This fork ships the packs from the repository `skills/` collection, including:

- `dispatching-parallel-agents`
- `finishing-a-development-branch`
- `openspec-explore`
- `openspec-propose`
- `openspec-verify-change`
- `subagent-driven-development`
- `systematic-debugging`
- `test-driven-development`
- `using-git-worktrees`
- `using-openspec-superpowers`
- `verification-before-completion`

If your team adds or removes packs in the fork, rebuild and republish so the bundle stays in sync.

## How to add a new pack

1. Add a directory under `skills/` in your initialized project or in this package.
2. Add `SKILL.md` with clear invocation + behavior instructions.
3. Run:

```bash
openspec init
```

or, after source changes:

```bash
openspec update
```

`openspec update` can also be used to refresh previously initialized projects when the fork changes bundled packs.

## Versioning expectation

For open-source distribution, treat skill pack changes as part of your release pipeline:

- update behavior and docs together in the same commit
- keep naming stable unless intentionally replacing semantics
- bump a changelog/plan artifact as part of release notes

# Installation

## Prerequisites

- **Node.js 20.19.0 or higher** — Check your version: `node --version`

## Package Managers

Install from npm:

### npm

```bash
npm install -g @fission-ai/openspec@latest
```

For this custom fork (after it is published under your namespace):

```bash
npm install -g @merrillli/openspec-superpowers@latest
```

### pnpm

```bash
pnpm add -g @fission-ai/openspec@latest
```

### yarn

```bash
yarn global add @fission-ai/openspec@latest
```

### bun

```bash
bun add -g @fission-ai/openspec@latest
```

## Git/monorepo installation

If you are publishing and consuming from the same repository layout (`3rdparty/openspec`), install by git URL:

```bash
npm install -g git+https://github.com/MerrillLi/openspec-superpowers.git#main:3rdparty/openspec
```

For local development:

```bash
cd /path/to/openspec-superpowers/3rdparty/openspec
npm install -g .
```

## Nix

Run OpenSpec directly without installation:

```bash
nix run github:Fission-AI/OpenSpec -- init
```

For this fork, replace the source with your fork URL:

```bash
nix run github:<your-org>/<your-repo>?dir=3rdparty/openspec -- init
```

Or install to your profile:

```bash
nix profile install github:Fission-AI/OpenSpec
```

For GitHub-maintained forks, use your own flake input name and `?dir=<path>` if needed instead.

Or add to your development environment in `flake.nix`:

```nix
{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    openspec.url = "github:Fission-AI/OpenSpec";
  };

  outputs = { nixpkgs, openspec, ... }: {
    devShells.x86_64-linux.default = nixpkgs.legacyPackages.x86_64-linux.mkShell {
      buildInputs = [ openspec.packages.x86_64-linux.default ];
    };
  };
}
```

## Verify Installation

```bash
openspec --version
```

## Next Steps

For this fork, initialize OpenSpec in a project and immediately refresh command set:

```bash
cd your-project
openspec init
openspec update
```

See [Getting Started](getting-started.md) for a full walkthrough.

import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('openspec bin shim exposes CLI help', () => {
  const result = spawnSync(process.execPath, ['./bin/openspec.js', '--help'], {
    cwd: repoRoot,
    encoding: 'utf8',
  });

  const output = `${result.stdout}${result.stderr}`;

  assert.equal(result.status, 0, output);
  assert.match(output, /(Usage:|OpenSpec)/);
});

#!/usr/bin/env node
import { createRequire } from 'node:module';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const openspecEntryPath = require.resolve('@fission-ai/openspec');
const openspecPackageRoot = path.dirname(path.dirname(openspecEntryPath));
const openspecBinPath = path.join(openspecPackageRoot, 'bin', 'openspec.js');

await import(pathToFileURL(openspecBinPath).href);

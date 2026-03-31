import { promises as fs, Dirent } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export interface SkillPackSource {
  name: string;
  sourcePath: string;
}

const DEFAULT_SKILL_PACK_SOURCE_DIRS = ['skills'];
const BUNDLED_SKILL_PACK_SOURCE_DIRS = ['skills'];

async function isDirectory(filePath: string): Promise<boolean> {
  try {
    const stats = await fs.stat(filePath);
    return stats.isDirectory();
  } catch {
    return false;
  }
}

async function hasSkillManifest(skillPath: string): Promise<boolean> {
  try {
    await fs.access(skillPath);
    return true;
  } catch {
    return false;
  }
}

function getProjectSourceDirectories(projectPath: string): string[] {
  return DEFAULT_SKILL_PACK_SOURCE_DIRS.map((dir) => path.join(projectPath, dir));
}

function getPackageSourceDirectories(): string[] {
  const runtimeDir = path.dirname(fileURLToPath(import.meta.url));
  const packageRoot = path.resolve(runtimeDir, '../../../');

  return BUNDLED_SKILL_PACK_SOURCE_DIRS.map((dir) => path.join(packageRoot, dir));
}

export async function getProjectCustomSkillPacks(projectPath: string): Promise<SkillPackSource[]> {
  const packs: SkillPackSource[] = [];
  const packNames = new Set<string>();

  const sourceDirectories = [...getProjectSourceDirectories(projectPath), ...getPackageSourceDirectories()];

  for (const sourceDir of sourceDirectories) {
    if (!(await isDirectory(sourceDir))) {
      continue;
    }

    let entries: Dirent[] = [];
    try {
      entries = await fs.readdir(sourceDir, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) {
        continue;
      }

      if (entry.name.startsWith('.')) {
        continue;
      }

      const packPath = path.join(sourceDir, entry.name);
      const manifestPath = path.join(packPath, 'SKILL.md');
      if (!(await hasSkillManifest(manifestPath))) {
        continue;
      }

      if (packNames.has(entry.name)) {
        continue;
      }

      packNames.add(entry.name);
      packs.push({
        name: entry.name,
        sourcePath: packPath,
      });
    }
  }

  return packs;
}

export async function syncProjectCustomSkillPacks(
  skillsDir: string,
  skillPacks: SkillPackSource[]
): Promise<number> {
  let synced = 0;

  for (const { name, sourcePath } of skillPacks) {
    const destination = path.join(skillsDir, name);

    await fs.cp(sourcePath, destination, { recursive: true, force: true });
    synced++;
  }

  return synced;
}

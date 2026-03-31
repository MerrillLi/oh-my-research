export interface SkillPackSource {
    name: string;
    sourcePath: string;
}
export declare function getProjectCustomSkillPacks(projectPath: string): Promise<SkillPackSource[]>;
export declare function syncProjectCustomSkillPacks(skillsDir: string, skillPacks: SkillPackSource[]): Promise<number>;
//# sourceMappingURL=custom-skill-packs.d.ts.map
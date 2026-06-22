import fs from "fs";
import path from "path";
import * as yaml from "js-yaml";

export interface PackTab {
  id: string;
  title: string;
  type: "tool" | "chat" | "report" | "settings";
  description?: string;
  icon?: string;
}

export interface Pack {
  id: string;
  name: string;
  description: string;
  icon: string;
  tabs: PackTab[];
  skills: string[];
  defaultTools: string[];
  starterPrompts: string[];
}

let packsCache: Pack[] | null = null;

export function loadPacks(): Pack[] {
  if (packsCache) return packsCache;
  const packsDir = path.join(process.cwd(), "src", "packs");
  const files = fs.readdirSync(packsDir).filter((f) => f.endsWith(".yaml"));
  packsCache = files.map((file) => {
    const content = fs.readFileSync(path.join(packsDir, file), "utf8");
    return yaml.load(content) as Pack;
  });
  return packsCache;
}

export function getPackById(id: string): Pack | undefined {
  return loadPacks().find((p) => p.id === id);
}

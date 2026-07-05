export type SkinId = "warm-earth" | "desert-night" | "forest" | "rose-dawn" | "sky-blue" | "discord";

export type SkinMode = "light" | "dark";

export interface Skin {
  id: SkinId;
  name: string;
  mode: SkinMode;
}

export const skins: Skin[] = [
  {
    id: "warm-earth",
    name: "Warm Earth",
    mode: "light",
  },
  {
    id: "desert-night",
    name: "Desert Night",
    mode: "dark",
  },
  {
    id: "forest",
    name: "Forest Canopy",
    mode: "light",
  },
  {
    id: "rose-dawn",
    name: "Rose Dawn",
    mode: "light",
  },
  {
    id: "sky-blue",
    name: "Sky Blue",
    mode: "light",
  },
  {
    id: "discord",
    name: "Discord",
    mode: "dark",
  },
];

export const DEFAULT_SKIN: SkinId = "discord";

export function getSkin(id: SkinId): Skin {
  return skins.find((s) => s.id === id) ?? skins[0];
}

const skinColors: Record<string, { primary: string }> = {
  "warm-earth": { primary: "#C4622D" },
  "desert-night": { primary: "#D97B4A" },
  forest: { primary: "#4A7C59" },
  "rose-dawn": { primary: "#D4586A" },
  "sky-blue": { primary: "#2B7EC4" },
  discord: { primary: "#5865F2" },
};

const skinList = [
  { id: "warm-earth", label: "Warm Earth" },
  { id: "desert-night", label: "Desert Night" },
  { id: "rose-dawn", label: "Rose Dawn" },
  { id: "sky-blue", label: "Sky Blue" },
  { id: "discord", label: "Discord" },
  { id: "forest", label: "Forest Canopy" },
];

export { skinColors, skinList };
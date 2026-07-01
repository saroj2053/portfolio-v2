export type SkinId = "warm-earth" | "desert-night" | "ocean" | "forest" | "midnight" | "rose-dawn" | "sky-blue" | "airbnb" | "coinbase" | "discord";

export type SkinMode = "light" | "dark";

export interface Skin {
  id: SkinId;
  name: string;
  mode: SkinMode;
  icon: string;
}

export const skins: Skin[] = [
  {
    id: "warm-earth",
    name: "Warm Earth",
    mode: "light",
    icon: "☀️",
  },
  {
    id: "desert-night",
    name: "Desert Night",
    mode: "dark",
    icon: "🌙",
  },
  {
    id: "ocean",
    name: "Ocean Depths",
    mode: "dark",
    icon: "🌊",
  },
  {
    id: "forest",
    name: "Forest Canopy",
    mode: "light",
    icon: "🌿",
  },
  {
    id: "midnight",
    name: "Midnight",
    mode: "dark",
    icon: "🌌",
  },
  {
    id: "rose-dawn",
    name: "Rose Dawn",
    mode: "light",
    icon: "🌹",
  },
  {
    id: "sky-blue",
    name: "Sky Blue",
    mode: "light",
    icon: "🩵",
  },
  {
    id: "airbnb",
    name: "Airbnb",
    mode: "light",
    icon: "🟥",
  },
  {
    id: "coinbase",
    name: "Coinbase",
    mode: "dark",
    icon: "🔷",
  },
  {
    id: "discord",
    name: "Discord",
    mode: "dark",
    icon: "💬",
  },
];

export const DEFAULT_SKIN: SkinId = "warm-earth";

export function getSkin(id: SkinId): Skin {
  return skins.find((s) => s.id === id) ?? skins[0];
}

const skinColors: Record<string, { primary: string; accent: string }> = {
  "warm-earth": { primary: "#C4622D", accent: "#6B7C5C" },
  "desert-night": { primary: "#D97B4A", accent: "#8A9E78" },
  ocean: { primary: "#2DD4BF", accent: "#14B8A6" },
  forest: { primary: "#4A7C59", accent: "#6B8F71" },
  midnight: { primary: "#9B6DFF", accent: "#B794FF" },
  "rose-dawn": { primary: "#D4586A", accent: "#E8917A" },
  "sky-blue": { primary: "#2B7EC4", accent: "#5BA3E6" },
  airbnb: { primary: "#FF385C", accent: "#00A699" },
  coinbase: { primary: "#0052FF", accent: "#0052FF" },
  discord: { primary: "#5865F2", accent: "#57F287" },
};

const skinList = [
  { id: "warm-earth", label: "Warm Earth" },
  { id: "desert-night", label: "Desert Night" },
  { id: "rose-dawn", label: "Rose Dawn" },
  { id: "sky-blue", label: "Sky Blue" },
  { id: "airbnb", label: "Airbnb" },
  { id: "coinbase", label: "Coinbase" },
  { id: "discord", label: "Discord" },
  { id: "forest", label: "Forest Canopy" },
  { id: "ocean", label: "Ocean Depths" },
  { id: "midnight", label: "Midnight" },
];

export { skinColors, skinList };
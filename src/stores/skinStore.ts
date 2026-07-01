import { create } from "zustand";
import { type SkinId, getSkin, DEFAULT_SKIN } from "@/data/skins";

const STORAGE_KEY = "skin";

function getInitialSkin(): SkinId {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && ["warm-earth", "desert-night", "ocean", "forest", "midnight", "rose-dawn", "sky-blue", "airbnb", "coinbase", "discord"].includes(stored)) {
      return stored as SkinId;
    }
  } catch {}
  return DEFAULT_SKIN;
}

function applySkin(id: SkinId) {
  const root = document.documentElement;
  const skin = getSkin(id);

  root.setAttribute("data-skin", id);

  if (skin.mode === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

interface SkinState {
  skinId: SkinId;
  setSkin: (id: SkinId) => void;
}

export const useSkinStore = create<SkinState>((set) => {
  const initial = getInitialSkin();
  applySkin(initial);

  return {
    skinId: initial,
    setSkin: (id: SkinId) => {
      localStorage.setItem(STORAGE_KEY, id);
      applySkin(id);
      set({ skinId: id });
    },
  };
});

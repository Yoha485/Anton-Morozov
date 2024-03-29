import { create } from "zustand";

export type GeneralState = {
  disableAppSound: boolean;
  appearence: "light" | "dark";
};

type GeneralAction = {
  setDisableAppSound: (disableAppSound: boolean) => void;
  setAppearence: (appearence: "light" | "dark") => void;
};

export const useGeneral = create<GeneralState & GeneralAction>()((set) => ({
  disableAppSound: false,
  appearence: "dark",

  setDisableAppSound: (disableAppSound) => set({ disableAppSound }),
  setAppearence: (appearence) => set({ appearence }),
}));

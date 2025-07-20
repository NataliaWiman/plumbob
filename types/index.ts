export type ViewMode = "worlds" | "households" | "sims";
export type WorldCategory = "residential" | "vacation" | "all";
export type HouseholdSort = "name" | "size";
export type SimsSort = "name" | "household";
export type MarkedFilter = "all" | "marked" | "unmarked";

export type Pack = {
  id: string;
  name: string;
  type: "bg" | "ep" | "gp" | "sp" | "kit";
  isOwned: boolean;
};

export type Category = {
  name: string;
  id: string;
  category: string;
};

export type Household = {
  id: string;
  name: string;
  members: Sim[];
  description: string;
  budget: string;
  unhoused: boolean;
  worldId: string;
  packId: string;
};

export type Sim = {
  id: string;
  name: string;
  householdId: string;
  age?: "child" | "teen" | "young adult" | "adult" | "elder";
  traits?: string[];
  marked?: boolean;
};

export type World = {
  order: string;
  id: string;
  name: string;
  pack: string;
  type?: "residential" | "vacation" | "empty";
};

import { households } from "./households";
import { packs } from "./packs";
import { worlds } from "./worlds";

export function getWorldName(worldId: string) {
  const world = worlds.find((w) => w.id === worldId);
  return world?.name;
}

export function getPackName(packId: string) {
  const pack = packs.find((p) => p.id === packId);
  return pack?.name;
}

export function getHouseholdName(householdId: string) {
  const household = households.find((h) => h.id === householdId);
  return household?.name;
}

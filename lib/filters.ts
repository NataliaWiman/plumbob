import { worlds } from "@/lib/worlds";
import { households } from "@/lib/households";
import { sims } from "@/lib/sims";
import { WorldCategory, HouseholdSort, Sim, SimsSort } from "@/types";

export function filterWorlds(category: WorldCategory, search: string) {
  const term = search.toLowerCase();
  return worlds.filter((w) => {
    if (category !== "all" && w.type !== category) return false;
    if (term && !w.name.toLowerCase().includes(term)) return false;
    return true;
  });
}

export function isHouseholdFullyMarked(
  householdId: string,
  marked: Record<string, boolean>
) {
  const members = sims.filter((s) => s.householdId === householdId);
  if (!members.length) return false;
  return members.every((m) => marked[m.id]);
}

export function filterHouseholds(
  selectedWorldId: string,
  search: string,
  sort: HouseholdSort
) {
  const term = search.toLowerCase();
  return households
    .filter((h) =>
      selectedWorldId === "all" ? true : h.worldId === selectedWorldId
    )
    .filter((h) => h.name.toLowerCase().includes(term))
    .sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "size") return b.members.length - a.members.length;
      return 0;
    });
}

export function filterSims(search: string): Sim[] {
  const term = search.toLowerCase();
  return sims.filter((s) => s.name.toLowerCase().includes(term));
}

export function filterSimmies(search: string, sort: SimsSort): Sim[] {
  const term = search.toLowerCase();
  return sims
    .filter((s) => s.name.toLowerCase().includes(term))
    .sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "household")
        return a.householdId.localeCompare(b.householdId);
      return 0;
    });
}

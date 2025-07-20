"use client";

import { useMemo, useState } from "react";
import { worlds } from "@/lib/worlds";
import { households } from "@/lib/households";
import {
  filterHouseholds,
  filterSimmies,
  filterSims,
  filterWorlds,
  isHouseholdFullyMarked,
} from "@/lib/filters";
import { useMarkedSims } from "@/components/sim/useMarkedSims";
import type {
  ViewMode,
  WorldCategory,
  HouseholdSort,
  SimsSort,
  MarkedFilter,
} from "@/types";
import WorldItem from "./WorldItem";
import HouseholdItem from "./HouseholdItem";
import SimsList from "./sim/SimsList";

export default function InfoContent() {
  const [view, setView] = useState<ViewMode>("households");
  const [worldCategory, setWorldCategory] =
    useState<WorldCategory>("residential");
  const [selectedWorldId, setSelectedWorldId] = useState<string>("all");
  const [householdMarkedFilter, setHouseholdMarkedFilter] =
    useState<MarkedFilter>("all");
  const [simMarkedFilter, setSimMarkedFilter] = useState<MarkedFilter>("all");

  const [householdSort, setHouseholdSort] = useState<HouseholdSort>("name");
  const [simsSort, setSimsSort] = useState<SimsSort>("name");
  const [expandAll, setExpandAll] = useState(false);
  const [search, setSearch] = useState("");

  const { marked, toggle: toggleSim } = useMarkedSims();

  const visibleWorlds = useMemo(
    () => filterWorlds(worldCategory, search),
    [worldCategory, search]
  );

  const visibleHouseholds = useMemo(() => {
    const base = filterHouseholds(selectedWorldId, search, householdSort);
    if (householdMarkedFilter === "all") return base;

    return base.filter((h) => {
      const fullyMarked = isHouseholdFullyMarked(h.id, marked);
      return householdMarkedFilter === "marked" ? fullyMarked : !fullyMarked;
    });
  }, [selectedWorldId, search, householdSort, householdMarkedFilter, marked]);

  const visibleSims = useMemo(() => filterSims(search), [search]);

  const visibleSimmies = useMemo(() => {
    const base = filterSimmies(search, simsSort);
    if (simMarkedFilter === "all") return base;
    return base.filter((s) => {
      const fullyMarked = marked[s.id] ?? false;
      return simMarkedFilter === "marked" ? fullyMarked : !fullyMarked;
    });
  }, [search, simsSort, simMarkedFilter, marked]);

  return (
    <section className="w-full md:w-6xl mx-auto px-4">
      {/* Tabs */}
      <div className="mb-4 flex gap-6 justify-center">
        {(["worlds", "households", "sims"] as ViewMode[]).map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => {
              setView(v);
              setSearch("");
            }}
            className={`font-semibold text-lg relative cursor-pointer after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-current ${
              view === v
                ? "after:opacity-100"
                : "after:opacity-0 hover:after:opacity-40"
            }`}
            aria-current={view === v}
          >
            {v[0].toUpperCase() + v.slice(1)}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder={`Search ${view}...`}
          className="w-72 px-3 py-2 border border-neutral-300 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {view === "worlds" && (
        <>
          <div className="mb-4 flex gap-4 justify-center">
            {(["residential", "vacation", "all"] as WorldCategory[]).map(
              (cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setWorldCategory(cat)}
                  className={`text-sm uppercase tracking-wide cursor-pointer ${
                    worldCategory === cat
                      ? "font-bold underline"
                      : "hover:underline"
                  }`}
                >
                  {cat} Worlds
                </button>
              )
            )}
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {visibleWorlds.map((w) => (
              <li key={w.id}>
                <WorldItem
                  world={w}
                  households={households}
                  sims={visibleSims}
                  marked={marked}
                  toggleSim={toggleSim}
                />
              </li>
            ))}
          </ul>
        </>
      )}

      {view === "households" && (
        <>
          <div className="flex flex-wrap justify-center items-end mb-6 gap-6">
            <label className="flex flex-col text-xs font-semibold text-neutral-600">
              <span className="mb-1">Filter by world</span>
              <select
                value={selectedWorldId}
                onChange={(e) => setSelectedWorldId(e.target.value)}
                className="px-2 py-1 border rounded-lg"
              >
                <option value="all">All Worlds</option>
                <option value="unhoused">Not in world</option>
                {worlds
                  .filter((w) => w.type === "residential")
                  .map((w) => (
                    <option key={w.id} value={w.id}>
                      {w.name}
                    </option>
                  ))}
              </select>
            </label>

            <label className="flex flex-col text-xs font-semibold text-neutral-600">
              <span className="mb-1">Marked status</span>
              <select
                value={householdMarkedFilter}
                onChange={(e) =>
                  setHouseholdMarkedFilter(e.target.value as MarkedFilter)
                }
                className="px-2 py-1 border rounded-lg"
              >
                <option value="all">Show All</option>
                <option value="marked">Marked</option>
                <option value="unmarked">Unmarked</option>
              </select>
            </label>

            <label className="flex flex-col text-xs font-semibold text-neutral-600">
              <span className="mb-1">Sort households</span>
              <select
                value={householdSort}
                onChange={(e) =>
                  setHouseholdSort(e.target.value as HouseholdSort)
                }
                className="px-2 py-1 border rounded-lg"
              >
                <option value="name">Name (A–Z)</option>
                <option value="size">Size (Big → Small)</option>
              </select>
            </label>

            <button
              onClick={() => setExpandAll(!expandAll)}
              className={`px-3 py-1 font-medium text-sm rounded-md bg-blue-100 hover:bg-blue-200 cursor-pointer`}
            >
              {expandAll ? "Collapse all" : "Expand all"}
            </button>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {visibleHouseholds.map((h) => {
              return (
                <li key={h.id}>
                  <HouseholdItem
                    household={h}
                    sims={visibleSims}
                    marked={marked}
                    toggleSim={toggleSim}
                    expandAll={expandAll}
                    fullyMarked={isHouseholdFullyMarked(h.id, marked)}
                  />
                </li>
              );
            })}
          </ul>
        </>
      )}

      {view === "sims" && (
        <>
          <div className="flex flex-wrap justify-center items-end mb-6 gap-6">
            <label className="flex flex-col text-xs font-semibold text-neutral-600">
              <span className="mb-1">Sort sims</span>
              <select
                value={simsSort}
                onChange={(e) => setSimsSort(e.target.value as SimsSort)}
                className="px-2 py-1 border rounded-lg"
              >
                <option value="name">Name (A–Z)</option>
                <option value="household">Household Name (A–Z)</option>
              </select>
            </label>

            <label className="flex flex-col text-xs font-semibold text-neutral-600">
              <span className="mb-1">Marked status</span>
              <select
                value={simMarkedFilter}
                onChange={(e) =>
                  setSimMarkedFilter(e.target.value as MarkedFilter)
                }
                className="px-2 py-1 border rounded-lg"
              >
                <option value="all">Show All</option>
                <option value="marked">Marked</option>
                <option value="unmarked">Unmarked</option>
              </select>
            </label>
          </div>

          <SimsList
            sims={visibleSimmies}
            marked={marked}
            toggle={toggleSim}
            allowBulk
            displayExpandedData
          />
        </>
      )}
    </section>
  );
}

"use client";

import { Household, Sim } from "@/types";
import Image from "next/image";
import { useState, useMemo } from "react";
import SimsList from "./sim/SimsList";
import { getPackName, getWorldName } from "@/lib/getNameById";

type Props = {
  household: Household;
  sims: Sim[];
  marked: Record<string, boolean>;
  toggleSim: (id: string) => void;
  expandAll?: boolean;
  fullyMarked?: boolean;
};

export default function HouseholdItem({
  household,
  sims,
  marked,
  toggleSim,
  expandAll,
  fullyMarked,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const householdSims = useMemo(
    () => sims.filter((s) => s.householdId === household.id),
    [sims, household.id]
  );

  return (
    <div
      className={`relative flex flex-col gap-2 p-2 rounded-lg shadow-sm transition ${
        fullyMarked ? "bg-green-100 ring-1 ring-green-300" : "bg-blue-50"
      }`}
    >
      <button
        type="button"
        className="relative flex justify-center items-end h-32 max-h-32 bg-white rounded-md focus:outline-none"
        onClick={() => setShowImage(true)}
        aria-label={`Open image for household ${household.name}`}
      >
        <Image
          width={400}
          height={400}
          src={`/households/${household.id}.png`}
          alt={household.name}
          className="w-auto h-full max-h-full object-contain"
          priority={false}
        />
        <Image
          width={100}
          height={100}
          src={`/icons/${household.packId.slice(0, 2)}/${household.packId}.png`}
          title={getPackName(household.packId)}
          alt={household.name}
          className="absolute bottom-1 right-1 w-7 h-7"
          priority={false}
        />
      </button>

      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        className="flex flex-col gap-0.5 my-1 cursor-pointer"
      >
        <span className="font-bold text-center text-lg leading-none">
          {household.name}
        </span>
        <span className="font-medium text-sm tracking-wide">
          {household.unhoused ? "Unhoused" : getWorldName(household.worldId)}
        </span>
      </button>

      {(expandAll ? expandAll : expanded) && (
        <SimsList
          sims={householdSims}
          marked={marked}
          toggle={toggleSim}
          allowBulk
          title="Sims"
        />
      )}

      {showImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowImage(false)}
        >
          <div
            className="max-w-[90vw] max-h-[90vh] bg-white rounded-lg overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              width={900}
              height={900}
              src={`/households/${household.id}.png`}
              alt={household.name}
              className="w-full h-auto"
            />
            <button
              type="button"
              className="absolute top-4 right-4 text-white underline"
              onClick={() => setShowImage(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

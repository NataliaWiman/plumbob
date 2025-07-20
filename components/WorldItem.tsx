"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Household, Sim, World } from "@/types";
import HouseholdItem from "./HouseholdItem";

type Props = {
  world: World;
  households: Household[];
  sims: Sim[];
  marked: Record<string, boolean>;
  toggleSim: (id: string) => void;
};

export default function WorldItem({
  world,
  households,
  sims,
  marked,
  toggleSim,
}: Props) {
  const [open, setOpen] = useState(false);

  const worldHouseholds = useMemo(
    () => households.filter((h) => h.worldId === world.id),
    [households, world.id]
  );

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full"
      >
        <Image
          width={500}
          height={500}
          src={`/worlds/${world.id}.png`}
          alt={world.name}
          className="w-full aspect-square object-cover rounded-md"
        />
        <h2 className="mt-2 font-bold text-lg text-center">{world.name}</h2>
      </button>

      {open && (
        <div className="flex flex-col gap-4 w-full">
          {worldHouseholds.map((h) => (
            <HouseholdItem
              key={h.id}
              household={h}
              sims={sims}
              marked={marked}
              toggleSim={toggleSim}
            />
          ))}
        </div>
      )}
    </div>
  );
}

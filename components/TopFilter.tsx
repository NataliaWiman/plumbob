"use client";

import { Pack } from "@/types";
import Image from "next/image";
import React from "react";

type TopFilterProps = {
  packs: Pack[];
  selectedPack: string;
  choosePack: (id: string) => void;
};

const TopFilter = ({ packs, selectedPack, choosePack }: TopFilterProps) => {
  return (
    <div className="flex flex-wrap mb-10">
      {packs.map((pack) => (
        <button
          key={pack.id}
          onClick={(e) => {
            e.preventDefault();
            choosePack(pack.id);
          }}
          className="group relative flex justify-center items-center cursor-pointer"
        >
          <Image
            src={`/icons/${pack.type}/${pack.id}.png`}
            width={40}
            height={40}
            alt={pack.name}
            className={`w-10 h-10 hover:scale-100 transition-all duration-300 ${
              selectedPack === pack.id ? "scale-100" : "scale-75"
            }`}
          />
          <span className="absolute top-11 left-[50%] translate-x-[-50%] z-10 inline-block px-1.5 py-1 font-medium text-xs text-center text-gray-500 bg-gray-100 rounded-md shadow-sm invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap pointer-events-none">
            {pack.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default React.memo(TopFilter);

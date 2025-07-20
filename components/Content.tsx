"use client";
import React, { useCallback, useState } from "react";
import TopFilter from "./TopFilter";
import SideFilter from "./SideFilter";
import List from "./List";
import { categories } from "@/lib/categories";
import { packs } from "@/lib/packs";
import { Pack } from "@/types";

const Content = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPack, setSelectedPack] = useState("");

  const ownedPacks = packs.filter((item: Pack) => item.isOwned);

  const chooseCategory = useCallback((id: string) => {
    const selected = categories.find((cat) => cat.id === id);
    setSelectedCategory(selected?.id || "");
  }, []);

  const choosePack = useCallback((id: string) => {
    const selected = packs.find((pack: Pack) => pack.id === id);
    setSelectedPack(selected?.id || "");
  }, []);

  return (
    <section className="min-h-screen">
      <h1>selected category: {selectedCategory}</h1>
      <h1>selected pack: {selectedPack}</h1>
      <div>
        <TopFilter
          packs={ownedPacks}
          selectedPack={selectedPack}
          choosePack={choosePack}
        />
      </div>
      <div className="flex gap-8">
        <div className="w-full max-w-44">
          <SideFilter
            selectedCategory={selectedCategory}
            chooseCategory={chooseCategory}
          />
        </div>
        <div className="w-full">
          <List />
        </div>
      </div>
    </section>
  );
};

export default Content;

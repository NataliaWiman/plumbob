"use client";
import React from "react";
import Button from "./ui/Button";
import { categories } from "@/lib/categories";
import { Category } from "@/types";

type SideFilterProps = {
  selectedCategory: string;
  chooseCategory: (id: string) => void;
};

const SideFilter = ({ selectedCategory, chooseCategory }: SideFilterProps) => {
  return (
    <div className="flex flex-col gap-2">
      {categories.map((item: Category) => (
        <Button
          key={item.id}
          title={item.name}
          type={item.id === selectedCategory ? "fill" : "outline"}
          handleClick={() => chooseCategory(item.id)}
          color={
            item.category === "female"
              ? "primary"
              : item.category === "male"
              ? "secondary"
              : "tertiary"
          }
        />
      ))}
    </div>
  );
};

export default React.memo(SideFilter);

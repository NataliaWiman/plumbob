import { getHouseholdName } from "@/lib/getNameById";
import { Sim } from "@/types";
import Image from "next/image";

type Props = {
  sim: Sim & { marked?: boolean };
  onToggle?: () => void;
  displayExpandedData?: boolean;
};

export default function SimItem({
  sim,
  onToggle,
  displayExpandedData = false,
}: Props) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`font-medium text-sm transition outline-offset-2 ${
        sim.marked
          ? "bg-green-200 text-green-800"
          : "bg-blue-100 hover:bg-blue-200 cursor-pointer"
      } ${
        displayExpandedData
          ? "flex items-center gap-2.5 py-2 pl-2 pr-3 rounded-lg"
          : "px-2 py-1 rounded"
      }`}
      aria-pressed={!!sim.marked}
    >
      {displayExpandedData && (
        <div className="w-10 h-10 bg-neutral-100 rounded-full overflow-hidden">
          <Image
            width={400}
            height={400}
            src={`/households/${sim.householdId}.png`}
            alt={sim.name}
            className="w-full h-full object-cover"
            priority={false}
          />
        </div>
      )}
      <div className={displayExpandedData ? "flex flex-col items-start" : ""}>
        <span className={displayExpandedData ? "font-semibold text-base" : ""}>
          {sim.name}
        </span>
        {displayExpandedData && (
          <span className="text-sm">{getHouseholdName(sim.householdId)}</span>
        )}
      </div>
    </button>
  );
}

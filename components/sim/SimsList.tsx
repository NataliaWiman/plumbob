import { Sim } from "@/types";
import SimItem from "./SimItem";

type Props = {
  sims: Sim[];
  marked: Record<string, boolean>;
  toggle: (id: string) => void;
  title?: string;
  allowBulk?: boolean;
  displayExpandedData?: boolean;
};

export default function SimsList({
  sims,
  marked,
  toggle,
  title,
  allowBulk,
  displayExpandedData = false,
}: Props) {
  if (!sims.length) return null;

  const allMarked = sims.every((s) => marked[s.id]);
  const anyMarked = sims.some((s) => marked[s.id]);

  return (
    <div className="flex flex-col items-center gap-2">
      {title && (
        <div className="flex items-center gap-2">
          {allowBulk && (
            <div className="flex gap-1">
              <button
                type="button"
                className="py-1 px-2 font-medium text-xs text-violet-800 border border-violet-500 bg-violet-100 hover:bg-violet-200 rounded-md cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
                onClick={() =>
                  sims.forEach((s) => !marked[s.id] && toggle(s.id))
                }
                disabled={allMarked}
              >
                Mark all
              </button>
              <button
                type="button"
                className="py-1 px-2 font-medium text-xs text-cyan-800 border border-cyan-500 bg-cyan-100 hover:bg-cyan-200 rounded-md cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
                onClick={() =>
                  sims.forEach((s) => marked[s.id] && toggle(s.id))
                }
                disabled={!anyMarked}
              >
                Unmark all
              </button>
            </div>
          )}
        </div>
      )}
      <ul className="flex flex-wrap justify-center gap-2">
        {sims.map((sim) => (
          <li key={sim.id}>
            <SimItem
              sim={{ ...sim, marked: marked[sim.id] }}
              onToggle={() => toggle(sim.id)}
              displayExpandedData={displayExpandedData}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

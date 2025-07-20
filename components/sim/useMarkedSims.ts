import { useCallback, useEffect, useState } from "react";

const LOCAL_KEY = "markedSims";

export function useMarkedSims() {
  const [marked, setMarked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_KEY);
      if (stored) setMarked(JSON.parse(stored));
    } catch {
      /* ignore parse errors */
    }
  }, []);

  const toggle = useCallback((id: string) => {
    setMarked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem(LOCAL_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const bulkMark = useCallback((ids: string[], value: boolean) => {
    setMarked((prev) => {
      const next = { ...prev };
      ids.forEach((id) => {
        next[id] = value;
      });
      localStorage.setItem(LOCAL_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return { marked, toggle, bulkMark };
}

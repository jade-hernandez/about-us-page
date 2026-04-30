import { useState, useEffect } from "react";

const GET_STATS = "https://www.greatfrontend.com/api/projects/challenges/statistics-metrics";

type StatsMetric = {
  metric: string;
  value: number;
};

type StatsResponse = {
  data: StatsMetric[];
};

type UseStatsReturn = {
  data: StatsResponse | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
};

export const useStats = (): UseStatsReturn => {
  const [data, setData] = useState<StatsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function fetchData() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(GET_STATS);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
};

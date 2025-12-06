import { useEffect, useState } from "react";
import { fetchNearbyJobs } from "../services/job";
import { JobType } from "../types/job";

export default function useNearbyJobs() {
  const [data, setData] = useState<JobType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetchNearbyJobs();
      setData(res);
      setError(null);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

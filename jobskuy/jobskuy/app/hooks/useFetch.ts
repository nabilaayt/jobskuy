import { useState, useEffect } from "react";
import { MOCK_JOBS_DATA, getJobById, searchJobs } from "../constants/mockData";

const NETWORK_DELAY = 600;

const useFetch = (endpoint: string, query: any) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await new Promise(resolve => setTimeout(resolve, NETWORK_DELAY));

      let mockData: any[] = [];

      if (endpoint === "search") {
        if (query.query && query.query.trim() !== "") {
          mockData = searchJobs(query.query);
        } else {
          mockData = MOCK_JOBS_DATA;
        }

        if (query.num_pages) {
          const itemsPerPage = 10;
          mockData = mockData.slice(0, itemsPerPage * query.num_pages);
        }
      } else if (endpoint === "job-details") {
        const job = getJobById(query.job_id);
        mockData = job ? [job] : [];
      } else {
        mockData = MOCK_JOBS_DATA;
      }

      setData(mockData);
    } catch (error: any) {
      setError(error);
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
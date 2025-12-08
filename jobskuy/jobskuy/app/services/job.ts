import { MOCK_JOBS_DATA, searchJobs, getJobById } from "../constants/mockData";

const NETWORK_DELAY = 500;

export async function fetchJobs(query: string = "", page: number = 1) {
  await new Promise(resolve => setTimeout(resolve, NETWORK_DELAY));

  try {
    let jobs = [];

    if (query && query.trim() !== "") {
      jobs = searchJobs(query);
    } else {
      jobs = MOCK_JOBS_DATA;
    }

    const itemsPerPage = 10;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedJobs = jobs.slice(startIndex, endIndex);

    return {
      data: paginatedJobs,
      total: jobs.length,
      page: page,
      hasMore: endIndex < jobs.length,
    };
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export async function fetchJobDetails(jobId: string) {
  await new Promise(resolve => setTimeout(resolve, NETWORK_DELAY));

  try {
    const job = getJobById(jobId);
    
    if (!job) {
      throw new Error(`Job with ID ${jobId} not found`);
    }

    return job;
  } catch (error) {
    console.error("Fetch job details error:", error);
    throw error;
  }
};
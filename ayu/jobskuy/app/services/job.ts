import { JobType } from "../types/job";

const EUROPE_LOCATIONS = [
  "germany", "berlin", "munich",
  "france", "paris",
  "netherlands", "amsterdam",
  "belgium",
  "sweden", "norway", "denmark",
  "spain", "italy", "portugal",
  "finland", "switzerland", "austria",
  "ireland", "united kingdom", "uk", "london",
  "scotland", "wales",
  "poland", "romania", "hungary",
  "czech", "slovakia", "slovenia",
  "croatia", "greece"
];

export async function fetchJobs(query: string, page: number = 1): Promise<JobType[]> {
  const url = `https://arbeitnow.com/api/job-board-api?page=${page}`;

  await new Promise(res => setTimeout(res, 300));

  try {
    const res = await fetch(url, {
      headers: {
        "Cache-Control": "no-cache",
      }
    });

    if (res.status === 429) {
      console.warn("Rate limit from API — retrying...");
      await new Promise(res => setTimeout(res, 1000)); // retry setelah 1 detik
      return fetchJobs(query, page); // recursive retry
    }

    if (!res.ok) throw new Error(`HTTP error ${res.status}`);

    const json = await res.json();
    const q = query?.toLowerCase() ?? "";

    return json.data
      .filter((job: any) => q === "" || job.title?.toLowerCase().includes(q))
      .map((job: any) => ({
        slug: job.slug,
        title: job.title,
        company_name: job.company_name,
        location: job.location,
        url: job.url,
      }));
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export async function fetchNearbyJobs(page: number = 1): Promise<JobType[]> {
  const url = `https://arbeitnow.com/api/job-board-api?page=${page}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);

    const json = await res.json();

    // Filter khusus Eropa
    let filtered = json.data.filter((job: any) => {
      const loc = job.location?.toLowerCase() || "";
      return EUROPE_LOCATIONS.some((e) => loc.includes(e));
    });

    // fallback kalau tidak ada job Eropa
    if (filtered.length === 0) {
      console.warn("No Europe jobs found — using fallback top 10");
      filtered = json.data.slice(0, 10);
    }

    return filtered.map((job: any) => ({
      slug: job.slug,
      title: job.title,
      company_name: job.company_name,
      location: job.location,
      url: job.url,
    }));
  } catch (err) {
    console.error("Fetch Nearby Jobs Error:", err);
    return [];
  }
};


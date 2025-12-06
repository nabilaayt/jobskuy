import { RAPID_API_KEY, RAPID_API_HOST } from "@env";

export async function fetchJobs(query: string, page = 1) {
  const url = `https://jsearch.p.rapidapi.com/search?query=${query}&page=${page}&num_pages=1`;

  try {
    const res = await fetch(url, {
      headers: {
        "x-rapidapi-key": RAPID_API_KEY,
        "x-rapidapi-host": RAPID_API_HOST,      
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }    

    const data = await res.json();
    return data.data; //field data dari RapidAPI
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;    
  }
};

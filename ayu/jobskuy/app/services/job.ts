const API_KEY = ""; 
const API_HOST = "jsearch.p.rapidapi.com";

export async function fetchJobs(query: string, page: number = 1) {
  const url = `https://${API_HOST}/search?query=${query}&page=${page}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error("HTTP Error " + res.status);
    }

    const data = await res.json();
    return data.data;       
  } catch (err) {
    console.error("Fetch error:", err);
    throw err;
  }
}

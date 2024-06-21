export interface DogImage {
  url: string;
}

const DOG_API_URL =
  "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";
const API_KEY =
  "live_zhLwrpAQqH4Jhqk1F3CfU3mGoKyKHGVUXHuylFYrCl8LmxBsf8QWYkumvfdfICSv";

export const fetchDogImage = async (): Promise<DogImage | null> => {
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
  });

  const requestOptions: RequestInit = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  try {
    const response = await fetch(DOG_API_URL, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    if (result.length > 0) {
      return result[0];
    }
    return null;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};

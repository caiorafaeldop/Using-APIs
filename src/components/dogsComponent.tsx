import React, { useEffect, useState } from "react";

interface DogImage {
  url: string;
}

const DogsComponent: React.FC = () => {
  const [dogImage, setDogImage] = useState<DogImage | null>(null);

  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key":
        "live_zhLwrpAQqH4Jhqk1F3CfU3mGoKyKHGVUXHuylFYrCl8LmxBsf8QWYkumvfdfICSv",
    });

    const requestOptions: RequestInit = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    fetch(
      "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.length > 0) {
          setDogImage(result[0]);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      {dogImage ? (
        <img src={dogImage.url} alt="Random Dog" className="dog-image" /> // Adicionando uma classe aqui
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DogsComponent;

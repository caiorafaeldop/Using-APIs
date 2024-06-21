import React, { useEffect, useState } from "react";
import { fetchDogImage, DogImage } from "../api/dogApi";
import Loading from "./Loading";

const DogsComponent: React.FC = () => {
  const [dogImage, setDogImage] = useState<DogImage | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getDogImage = async () => {
      try {
        const image = await fetchDogImage();
        setDogImage(image);
      } catch (err) {
        setError("Failed to fetch dog image");
      }
    };

    getDogImage();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {dogImage ? (
        <img src={dogImage.url} alt="Random Dog" className="dog-image" />
      ) : (
        <p>
          <Loading />
        </p>
      )}
    </div>
  );
};

export default DogsComponent;

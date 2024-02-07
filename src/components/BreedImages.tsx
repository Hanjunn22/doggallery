import React, { useEffect, useState } from "react";
import { fetchBreedImages, fetchRandomImages } from "../api/dogs";
import Loading from "./Loading";

interface Props {
  breed: string;
}

const BreedImages: React.FC<Props> = ({ breed }) => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getImages = async () => {
      setLoading(true);
      let data;
      if (breed) {
        data = await fetchBreedImages(breed);
      } else {
        data = await fetchRandomImages(80);
      }
      if (data && data.message) {
        setImages(Array.isArray(data.message) ? data.message : [data.message]);
      }
      setLoading(false);
    };

    getImages();
  }, [breed]);

  return (
    <div className="dog-images-container">
      {loading ? (
        <><Loading /></>
      ) : (
        images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Dog"
            style={{ width: "200px", height: "200px", margin: "5px" }}
          />
        ))
      )}
    </div>
  );
};

export default BreedImages;
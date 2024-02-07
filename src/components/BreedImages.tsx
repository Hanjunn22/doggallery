import React, { useState, useEffect } from 'react';
import { fetchBreedImages } from '../api/dogs';

interface Props {
  breed: string;
}

const BreedImages: React.FC<Props> = ({ breed }) => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getBreedImages = async () => {
      if (!breed) return;

      setLoading(true);
      const data = await fetchBreedImages(breed);
      if (data && data.message) {
        setImages(data.message);
      }
      setLoading(false);
    };

    getBreedImages();
  }, [breed]);

  if (loading) return <p>Loading images...</p>;

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt="Dog" style={{ width: '100px', height: '100px', margin: '10px' }} />
      ))}
    </div>
  );
};

export default BreedImages;

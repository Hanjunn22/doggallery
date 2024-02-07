import React, { useEffect, useState } from 'react';
import { fetchBreedImages, fetchRandomImages } from '../api/dogs';

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
        // 선택된 품종의 이미지를 가져옵니다.
        data = await fetchBreedImages(breed);
      } else {
        // 랜덤한 품종의 이미지를 가져옵니다.
        data = await fetchRandomImages(10); // 예: 10개의 랜덤 이미지를 요청
      }
      if (data && data.message) {
        setImages(Array.isArray(data.message) ? data.message : [data.message]);
      }
      setLoading(false);
    };

    getImages();
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

import React, { useState, useEffect } from 'react';
import { fetchBreeds } from './api/dogs';
import BreedList from './components/BreedList';
import BreedImages from './components/BreedImages';

const Main = () => {
  const [breed, setBreed] = useState<string>('');

  useEffect(() => {
    const getBreeds = async () => {
      const data = await fetchBreeds();
      console.log(data); // 데이터 확인 및 초기 품종 설정 로직 추가
    };
    
    getBreeds();
  }, []);

  return (
    <div>
      <BreedList onSelectBreed={setBreed} />
      {breed && <BreedImages breed={breed} />}
    </div>
  );
}

export default Main;

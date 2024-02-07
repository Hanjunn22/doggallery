import React, { useState, useEffect } from 'react';
import { fetchBreeds } from '../api/dogs';
import BreedList from '../components/BreedList';
import BreedImages from '../components/BreedImages';

const Home = () => {
  const [selectedBreed, setSelectedBreed] = useState<string>('');
  const [error, setError] = useState<string>(''); // 오류 메시지 상태 추가

  useEffect(() => {
    const getBreeds = async () => {
      try {
        await fetchBreeds(); // 여기서는 반환된 품종 정보를 사용하고 있지 않지만, 필요에 따라 사용할 수 있습니다.
      } catch (error) {
        setError('Failed to fetch breeds. Please try again later.'); // 오류 처리
        console.error(error);
      }
    };

    getBreeds();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>; // 오류 메시지를 사용자에게 표시
  }

  return (
    <div>
      <BreedList onSelectBreed={setSelectedBreed} />
      <BreedImages breed={selectedBreed} />
    </div>
  );
};

export default Home;

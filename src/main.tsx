import React, { useState } from 'react';
import BreedList from './components/BreedList';
import BreedImages from './components/BreedImages';

const Main = () => {
  const [selectedBreed, setSelectedBreed] = useState<string>('');

  return (
    <div>
      <BreedList onSelectBreed={setSelectedBreed} />
      <BreedImages breed={selectedBreed} />
    </div>
  );
};

export default Main;
import React, { useState, useEffect } from 'react';
import { fetchBreeds } from '../api/dogs';

interface Props {
  onSelectBreed: (breed: string) => void;
}

const BreedList: React.FC<Props> = ({ onSelectBreed }) => {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getBreeds = async () => {
      setLoading(true);
      const data = await fetchBreeds();
      if (data && data.message) {
        setBreeds(Object.keys(data.message));
      }
      setLoading(false);
    };

    getBreeds();
  }, []);

  if (loading) return <p>Loading breeds...</p>;

  return (
    <select onChange={(e) => onSelectBreed(e.target.value)}>
      <option value="">Select a breed</option>
      {breeds.map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  );
};

export default BreedList;

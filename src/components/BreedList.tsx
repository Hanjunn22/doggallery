import React, { useEffect, useState } from "react";
import { fetchBreeds } from "../api/dogs";
import "./BreedList.css";

interface Props {
  onSelectBreed: (breed: string) => void;
}

const BreedList: React.FC<Props> = ({ onSelectBreed }) => {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getBreeds = async () => {
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
    <div className="select-wrapper">
      <select
        className="breed-select"
        onChange={(e) => onSelectBreed(e.target.value)}
        defaultValue=""
      >
        <option value="">All Breeds</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BreedList;

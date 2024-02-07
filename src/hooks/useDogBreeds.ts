import { useQuery } from 'react-query';
import { fetchBreeds } from '../api/dogs';

export const useDogBreeds = () => {
  return useQuery('breeds', fetchBreeds, {
    staleTime: 1000 * 60 * 60, // 1시간
  });
};
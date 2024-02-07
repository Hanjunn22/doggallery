// src/api/dogs.ts
import axios from 'axios';

const API_BASE_URL = 'https://dog.ceo/api';

export const fetchBreeds = async (): Promise<any> => {
  const response = await axios.get(`${API_BASE_URL}/breeds/list/all`);
  return response.data;
};

export const fetchBreedImages = async (breed: string): Promise<any> => {
  const response = await axios.get(`${API_BASE_URL}/breed/${breed}/images`);
  return response.data;
};

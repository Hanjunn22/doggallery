import axios from 'axios';

const API_BASE_URL = 'https://dog.ceo/api';

interface BreedResponse {
  message: {
    [key: string]: string[];
  };
  status: string;
}

interface ImagesResponse {
  message: string[];
  status: string;
}

interface RandomImagesResponse {
  message: string[];
  status: string;
}

export const fetchBreeds = async (): Promise<BreedResponse> => {
  const response = await axios.get<BreedResponse>(`${API_BASE_URL}/breeds/list/all`);
  return response.data;
};

export const fetchBreedImages = async (breed: string): Promise<ImagesResponse> => {
  const response = await axios.get<ImagesResponse>(`${API_BASE_URL}/breed/${breed}/images`);
  return response.data;
};

export const fetchRandomImages = async (count: number): Promise<RandomImagesResponse> => {
  const response = await axios.get<RandomImagesResponse>(`${API_BASE_URL}/breeds/image/random/${count}`);
  return response.data;
};

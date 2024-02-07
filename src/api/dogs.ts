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
  try {
    const response = await axios.get<BreedResponse>(`${API_BASE_URL}/breeds/list/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching breeds:', error);
    throw error; // 오류를 던져서 상위 컴포넌트에서 처리할 수 있도록 합니다.
  }
};

export const fetchBreedImages = async (breed: string): Promise<ImagesResponse> => {
  try {
    const response = await axios.get<ImagesResponse>(`${API_BASE_URL}/breed/${breed}/images`);
    return response.data;
  } catch (error) {
    console.error('Error fetching breed images:', error);
    throw error;
  }
};

export const fetchRandomImages = async (count: number): Promise<RandomImagesResponse> => {
  try {
    const response = await axios.get<RandomImagesResponse>(`${API_BASE_URL}/breeds/image/random/${count}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching random images:', error);
    throw error;
  }
};
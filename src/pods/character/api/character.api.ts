import axios from 'axios';

const baseUrl = 'http://localhost:3001/characters';

export const getCharacterCollection = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const getCharacterById = async (id: string) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export const updateCharacter = async (id: string, character: any) => {
  const response = await axios.put(`${baseUrl}/${id}`, character);
  return response.data;
};
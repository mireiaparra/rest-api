import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';
import { CONSTANTS, ENDPOINTS_DEF } from '#core/env';

let characterCollection = [...mockCharacterCollection];

export const getCharacterCollection = async () => {
  const response = await axios.get(`${CONSTANTS.API_BASE_URL}${ENDPOINTS_DEF.characters}`);
  return response.data;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};

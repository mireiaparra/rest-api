import { Character } from './character.api-model';
import { Lookup } from '#common/models';

export const mockCharacterCollection: Character[] = [
  {
    id: '1',
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: 'Earth (C-137)',
    location: 'Earth (Replacement Dimension)',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  },
  {
    id: '2',
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: 'Earth (C-137)',
    location: 'Earth (Replacement Dimension)',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: '2017-11-04T18:50:21.651Z',
  },
];

export const mockCities: Lookup[] = [
  {
    id: 'Seattle',
    name: 'Seattle',
  },
  {
    id: 'New York',
    name: 'New York',
  },
];

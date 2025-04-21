import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { useGeneralApiCollection } from '#core/api/api-collection-hook';
import { mapFromApiToVm } from './character-collection.mapper';


export const useCharacterCollection = () => {
  const {
    collection,
    loadCollection,
  } = useGeneralApiCollection({
    mapFromApiToVm: mapFromApiToVm,
    endPoint: 'CHARACTER',
  });

  const loadCharacterCollection = (
    searchParams: string = ''
  ) => {
    loadCollection(searchParams)
  };

  return {
    characterCollection:collection,
    loadCharacterCollection,
  };
};

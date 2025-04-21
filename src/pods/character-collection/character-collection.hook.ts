import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { useGeneralApiCollection } from '#core/api/api-collection-hook';
import { mapFromApiToVm } from './character-collection.mapper';
import { ENDPOINTS_DEF } from '#core/env';


export const useCharacterCollection = () => {
  const {
    collection,
    loadCollection,
  } = useGeneralApiCollection({
    mapFromApiToVm,
    endPoint: ENDPOINTS_DEF.characters,
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

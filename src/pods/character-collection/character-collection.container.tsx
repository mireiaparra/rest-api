import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const navigate = useNavigate();

  const path = useLocation();

  React.useEffect(() => {
    loadCharacterCollection();
  }, [path]);


  const handleDetail = (id: string) => {
    navigate(linkRoutes.detailCharacter(id.toString()));
  };


  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onDetail={handleDetail}
    />
  );
};

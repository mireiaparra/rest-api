import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams<{ id: string }>();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacterById(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  return <CharacterComponent character={character}/>;
};

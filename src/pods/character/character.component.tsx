import React from 'react';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from '#common/components';
import { Lookup } from '#common/models';
import { formValidation } from './character.validations';
import * as classes from './character.styles';
import { Character } from './api';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {
  character: Character;
  cities: Lookup[];
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        image={character.image}
        alt={character.name}
        style={{ width: '100%', maxWidth: '300px', margin: '20px auto' }}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {character.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Status:</strong> {character.status}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Species:</strong> {character.species}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Type:</strong> {character.type || 'N/A'}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Gender:</strong> {character.gender}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Origin:</strong> {character.origin}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Location:</strong> {character.location}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Episodes:</strong> {character.episode.length}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Created:</strong> {new Date(character.created).toLocaleDateString()}
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        color="primary"
        onClick={handleBack}
        style={{ margin: '20px' }}
      >
        Volver
      </Button>
    </Card>
  );
};

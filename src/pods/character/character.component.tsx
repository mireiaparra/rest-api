import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from '#common/components';
import { Lookup } from '#common/models';
import { formValidation } from './character.validations';
import * as classes from './character.styles';
import { Character, updateCharacter } from './api';
import { Button, Card, CardContent, CardMedia, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const [bestSentences, setBestSentences] = useState(character.bestSentences || []);
  const [newSentence, setNewSentence] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (character.bestSentences) {
      setBestSentences(character.bestSentences);
    }
  }, [character]);
  const handleBack = () => {
    navigate(-1); 
  };

  const handleAddSentence = () => {
    if (newSentence.trim()) {
      const updatedSentences = [...bestSentences, newSentence];
      setBestSentences(updatedSentences);
      setNewSentence('');
      updateCharacter(character.id, { ...character, bestSentences: updatedSentences });
    }
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
        <Typography variant="subtitle1" gutterBottom>
          <strong>Best Sentences:</strong>
        </Typography>
        <ul>
          {bestSentences.map((sentence, index) => (
            console.log(sentence),
            <li key={index}>{sentence}</li>
          ))}
        </ul>
        <TextField
          label="Add a new sentence"
          value={newSentence}
          onChange={(e) => setNewSentence(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleAddSentence}>
          Add Sentence
        </Button>
      </CardContent>
      <Button
        variant="contained"
        color="primary"
        onClick={handleBack}
        style={{ margin: '20px' }}
      >
        Back
      </Button>
    </Card>
  );
};

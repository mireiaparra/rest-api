import * as React from 'react';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Typography from '@mui/material/Typography';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

interface Props {
  character: CharacterEntityVm;
  onDetail: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onDetail } = props;

  return (
    <Card>
      <CardHeader
      avatar={
        <Avatar aria-label="Character">
          {character.gender === 'Male' ? <MaleIcon /> : <FemaleIcon />}
        </Avatar>
      }
        title={character.name}
        subheader={`Status: ${character.status} | Species: ${character.species}`}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            Origin: {character.origin}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Location: {character.location}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onDetail(character.id)}>
        <VisibilityIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

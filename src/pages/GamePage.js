import React, { useState } from 'react';
import { Container, Row } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import '../index.css';
import InputComponent from '../components/input-component';
import data from '../resources/words.json';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
  },
}));

export default function GamePage() {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const words = data.map((word) => word);

  const awnser = words[Math.floor(Math.random() * words.length)];

  const renderEncryptedAwnser = (awnser) => {
    const items = [];

    for (let i = 0; i < awnser.length; i++) {
      items.push(<Paper key={i} variant='outlined' color='primary' />);
    }

    return <div className={classes.root}>{items}</div>;
  };

  return (
    <div className='centered'>
      <Container>
        <Row>{renderEncryptedAwnser(awnser)}</Row>
        <Row className='centerfixed'>
          <InputComponent
            placeholder={'TRY TO GUESS A LETTER'}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Row>
      </Container>
    </div>
  );
}

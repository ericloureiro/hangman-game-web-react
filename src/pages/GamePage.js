import '../index.css';
import React, { useState, useCallback, useMemo, useContext } from 'react';
import { Container, Row } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputComponent from '../components/input-component';
import data from '../resources/words.json';
import SnackBarComponent from '../components/snackbar-component';
import { SnackBarContext } from '../utils/SnackBarContext';
import useSnackBars from '../utils/SnackBarConsumer';

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

const GamePage = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const SPACE = '_';
  const words = useMemo(() => data.map((word) => word), []);
  const randozimeWord = useCallback(
    () => words[Math.floor(Math.random() * words.length)],
    [words]
  );

  const awnser = useMemo(() => randozimeWord(), [randozimeWord]);
  const awnserRendered = useMemo(() => {
    const items = [];

    for (let i = 0; i < awnser.length; i++) {
      items.push(
        <Paper
          className='centered'
          key={i}
          variant='elevation'
          elevation={2}
          color='primary'
        >
          <h1>{SPACE}</h1>
        </Paper>
      );
    }

    return <div className={classes.root}>{items}</div>;
  }, [awnser, classes]);

  const onSubmit = (input) => {
    if (value === '' || value === undefined) {
    }

    // TODO Validations before replace !!
    // if () {
    //   setTextSnackBar('You guessed the letter ' + value);
    //   setOpenSnackBar(true);
    // }
    // && input.Length == 1
    // && char.IsLetter(input, 0)
    // && !awnserEncrypted.ToString().Contains(input)
    // && !displayedTrys.ToString().Contains(input);
    // awnser.replace(value, awnser);

    setValue('');
  };

  return (
    <div className='centered'>
      <Container className='centerfixed'>
        <Row>{awnserRendered}</Row>
        <Row className='centerfixed'>
          <InputComponent
            placeholder={'TRY TO GUESS A LETTER'}
            value={value}
            handleChange={(e) => setValue(e.target.value)}
            handleSubmit={(e) => onSubmit()}
          />
        </Row>
      </Container>
    </div>
  );
};

export default GamePage;

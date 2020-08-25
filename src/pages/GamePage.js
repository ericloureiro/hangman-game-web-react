import '../index.css';
import React, { useState, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputComponent from '../components/input-component';
import SnackBarComponent from '../components/snackbar-component';
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

const GamePage = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [word, setWord] = useState('');
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [textSnackBar, setTextSnackBar] = useState('');
  const words = data.map((word) => word);
  const awnser = words[Math.floor(Math.random() * words.length)];

  const space = '_';

  const onEnterPressed = (input) => {
    console.log(value);
    if (value === '' || value === undefined) {
      setTextSnackBar("You can't submit an empty input");
      setSeverity('warning');
      setOpenSnackBar(true);
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

  useEffect(() => {
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
          <h1>{space}</h1>
        </Paper>
      );
    }

    setWord(<div className={classes.root}>{items}</div>);
    // eslint-disable-next-line
  }, []);

  return (
    <div className='centered'>
      <Container className='centerfixed'>
        <Row>{word}</Row>
        <Row className='centerfixed'>
          <InputComponent
            placeholder={'TRY TO GUESS A LETTER'}
            value={value}
            handleChange={(e) => setValue(e.target.value)}
            handleEnterPressed={(e) => onEnterPressed()}
          />
        </Row>
      </Container>
      <SnackBarComponent
        severity={severity}
        text={textSnackBar}
        openSnackBar={openSnackBar}
        setOpenSnackBar={setOpenSnackBar}
      />
    </div>
  );
};

export default GamePage;

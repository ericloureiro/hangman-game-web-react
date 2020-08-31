import '../index.css';
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputComponent from '../components/input-component';
import data from '../resources/words.json';
import { withSnackbar } from 'notistack';

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
  const [awnserRendered, setAwnserRendered] = useState('');

  const words = useMemo(() => data.map((word) => word), []);

  const randozimeWord = useCallback(
    () => words[Math.floor(Math.random() * words.length)],
    [words]
  );

  const awnser = useMemo(() => randozimeWord(), [randozimeWord]);

  const renderAwnser = useCallback(() => {
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
          <Container>{'_'}</Container>
        </Paper>
      );
    }

    setAwnserRendered(<div className={classes.root}>{items}</div>);
  }, [classes.root, awnser]);

  useEffect(() => renderAwnser(), [renderAwnser, awnser]);

  const onSubmit = (input) => {
    var isOneRight = false;

    console.log(awnser);

    if (!IsInputValid(input)) {
      props.enqueueSnackbar('Please, inform a valid character', {
        variant: 'info',
      });

      return;
    }

    for (var i = 0; i < awnser.length; i++) {
      if (!IsCharsEquals(input[0], awnser[i])) {
        continue;
      }

      ReplaceAwnserEncryptedChar(input, i);
      isOneRight = true;
    }

    if (isOneRight) {
      props.enqueueSnackbar('yay', { variant: 'success' });
    }
  };

  const IsInputValid = (input) => {
    console.log(input);
    return (
      input !== null &&
      input !== '' &&
      input !== undefined &&
      input.length === 1
    );
  };

  const IsCharsEquals = (inputA, inputB) =>
    inputA.toLowerCase() === inputB.toLowerCase();

  const ReplaceAwnserEncryptedChar = (input, position) => {
    var child = awnserRendered.props.children[position];

    SetLastChildrenValue(input, child);
  };

  const SetLastChildrenValue = (input, object) => {
    while (object['props'] !== undefined) {
      object = object['props']['children'];
    }

    object = input;
  };

  return (
    <div className='centered'>
      <Container className='centerfixed'>
        <Row>{awnserRendered}</Row>
        <Row className='centerfixed'>
          <InputComponent
            placeholder={'TRY TO GUESS A LETTER'}
            handleSubmit={(e) => onSubmit(e)}
          />
        </Row>
      </Container>
    </div>
  );
};

export default withSnackbar(GamePage);

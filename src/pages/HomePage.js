import '../index.css';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import SelectComponent from '../components/select-component';
import { useHistory } from 'react-router-dom';

const languagesOptions = ['English', 'Portuguese'];
const triesOptions = [5, 6, 7, 8, 9, 10];

const HomePage = (props) => {
  const history = useHistory();
  const [language, setLanguage] = useState('');
  const [tries, setTries] = useState('');

  const onClick = (_) => history.push('/game', { language, tries });

  return (
    <div className='centered'>
      <div>
        <h1>HANGMAN GAME</h1>
        <h2>This is a guessing game made on React</h2>
        <h3>A random animal name will be generated.</h3>
        <h3>Have a happy journey guessing!</h3>
        <div style={{ position: 'absolute', bottom: 20, right: 20 }}>
          <SelectComponent
            title={'Language'}
            value={language}
            valuesList={languagesOptions}
            handleChange={(e) => setLanguage(e.target.value)}
            width={120}
          />
          <SelectComponent
            title={'Tries'}
            value={tries}
            valuesList={triesOptions}
            handleChange={(e) => setTries(e.target.value)}
            width={60}
          />
          <Button variant='contained' color='primary' onClick={onClick}>
            START GAME
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

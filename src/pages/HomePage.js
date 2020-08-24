import React from 'react';
import { Button } from '@material-ui/core';
import '../index.css';
import SelectComponent from '../components/select-component';
import { withRouter } from 'react-router-dom';

const languagesOptions = ['English', 'Portuguese'];
const tryOptions = [5, 6, 7, 8, 9, 10];

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { language: languagesOptions[0], trys: tryOptions[0] };

    this.onClick = this.onClick.bind(this);
  }

  onClick = (_) => this.props.history.push('/game', this.state);

  render() {
    const { language, trys } = this.state;
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
              handleChange={(e) => this.setState({ language: e.target.value })}
              width={120}
            />
            <SelectComponent
              title={'Trys'}
              value={trys}
              valuesList={tryOptions}
              handleChange={(e) => this.setState({ trys: e.target.value })}
              width={45}
            />
            <Button variant='contained' color='primary' onClick={this.onClick}>
              START GAME
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage);

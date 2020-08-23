import React from 'react';
import '../App.css';
import { withRouter } from 'react-router-dom';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.history.location.state;
  }

  render() {
    return (
      <div className='centered'>
        {console.log(this.state)}
        <div>Chegou</div>
      </div>
    );
  }
}

export default withRouter(GamePage);

import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

class SelectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    let { title, value, valuesList, handleChange, width } = this.props;

    return (
      <FormControl
        style={{
          width,
          position: 'flex',
          bottom: 10,
          right: 15,
          margin: 5,
        }}
      >
        <InputLabel>{title}</InputLabel>
        <Select
          variant={'standard'}
          value={value}
          onChange={handleChange}
          label={title}
        >
          {valuesList.map((value, i) => (
            <MenuItem key={i} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

export default SelectComponent;

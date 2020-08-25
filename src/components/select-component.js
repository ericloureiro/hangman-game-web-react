import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'flex',
    bottom: 10,
    right: 15,
    margin: 5,
  },
}));

const SelectComponent = (props) => {
  const classes = useStyles();
  const { title, value, valuesList, handleChange, width } = props;

  return (
    <FormControl
      className={classes.root}
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
};

export default SelectComponent;

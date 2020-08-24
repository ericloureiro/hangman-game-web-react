import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

export default function SelectComponent(props) {
  const { title, value, valuesList, handleChange, width } = props;

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

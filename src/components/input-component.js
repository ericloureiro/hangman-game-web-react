import React, { useState, useCallback, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 270,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  error: {
    '&.MuiFormHelperText-root.Mui-error': {
      color: theme.palette.common.black,
    },
  },
}));

const InputComponent = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const { placeholder, handleSubmit } = props;

  const regex = new RegExp('[^A-Za-z]');
  const handleChange = useCallback((value) => {
    setValue(value);
  }, []);

  useEffect(() => setError(value.length === 0 || regex.test(value)), [
    value,
    regex,
  ]);

  return (
    <Paper className={classes.root}>
      <InputBase
        autoFocus
        error={error}
        className={classes.input}
        placeholder={placeholder}
        value={value?.toUpperCase()}
        onChange={(e) => handleChange(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && !error) {
            e.preventDefault();
            handleSubmit(value);
          }
        }}
        type={'text'}
        inputProps={{
          maxLength: 1,
        }}
      />
      <Divider className={classes.divider} orientation='vertical' />
      <IconButton
        disabled={error}
        className={classes.iconButton}
        color={'primary'}
        onClick={(e) => handleSubmit(value)}
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default InputComponent;

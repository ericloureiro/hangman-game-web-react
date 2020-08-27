import React, { useState, useCallback, useMemo, useEffect } from 'react';
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
}));

const InputComponent = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const { placeholder, handleSubmit } = props;

  const regex = useMemo(() => new RegExp('[^A-Za-z]'), []);
  const handleChange = useCallback((value) => {
    setValue(value);
  }, []);

  useEffect(() => setError(!regex.test(value)), [regex, value]);

  return (
    <Paper component='form' className={classes.root}>
      <InputBase
        autoFocus
        error={error}
        className={classes.input}
        placeholder={placeholder}
        value={value.toUpperCase()}
        onChange={(e) => handleChange(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && !error) {
            e.preventDefault();
            handleSubmit();
          }
        }}
        type={'text'}
        inputProps={{
          maxLength: 1,
          pattern: '[a-zA-Z]',
        }}
      />
      <Divider className={classes.divider} orientation='vertical' />
      <IconButton
        disabled={!error}
        className={classes.iconButton}
        color={'primary'}
        onClick={(e) => handleSubmit()}
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default InputComponent;

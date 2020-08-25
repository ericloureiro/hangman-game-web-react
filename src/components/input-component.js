import React from 'react';
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
  const { placeholder, value, handleEnterPressed, handleChange } = props;

  return (
    <Paper component='form' className={classes.root}>
      <InputBase
        autoFocus
        className={classes.input}
        placeholder={placeholder}
        value={value.toUpperCase()}
        onChange={handleChange}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleEnterPressed();
          }
        }}
        type={'text'}
        inputProps={{ maxLength: 1, pattern: '[a-zA-Z]' }}
      />
      <Divider className={classes.divider} orientation='vertical' />
      <IconButton className={classes.iconButton} color='primary'>
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default InputComponent;

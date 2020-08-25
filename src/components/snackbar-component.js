import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const SnackBarComponent = (props) => {
  const classes = useStyles();
  const { severity, text, openSnackBar, setOpenSnackBar } = props;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MuiAlert
          elevation={6}
          variant='filled'
          onClose={handleClose}
          severity={severity}
        >
          {text}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default SnackBarComponent;

import React from 'react';
import MuiBackdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';
import { useSelector, shallowEqual } from 'react-redux';
import { selectUserLoading } from 'redux/selectors/userSelector';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const BackDrop = () => {
  const classes = useStyles();
  const isLoading = useSelector(selectUserLoading, shallowEqual);

  return (
    <div>
      <MuiBackdrop 
        invisible={false}
        className={classes.backdrop} 
        open={isLoading}
        transitionDuration={600}>
        <CircularProgress
          size={50}
          thickness={3}
          color="inherit" />
      </MuiBackdrop>      
    </div>
  );
};

export default BackDrop

import React from 'react';
import AppBar from 'components/layout/AppBar';
import SearchBar from 'components/Main/SearchBar';
import { Container, makeStyles } from '@material-ui/core';
import UserContainer from 'components/Main/UserContainer';
import Backdrop from 'components/common/Backdrop';

const useStyles = makeStyles({
  mainContainer: {
    padding: '30px',
  },
});

const Main = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar />
      <Container maxWidth="md" className={classes.mainContainer}>
        <SearchBar />
        <UserContainer />
      </Container>
      <Backdrop />
    </div>
  );
};

export default Main;

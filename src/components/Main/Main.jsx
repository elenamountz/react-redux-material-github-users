import React from 'react';
import AppBar from 'components/layout/AppBar';
import SearchBar from 'components/SearchBar';
import { Container, makeStyles } from '@material-ui/core';

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
      </Container>
    </div>
  );
};

export default Main;

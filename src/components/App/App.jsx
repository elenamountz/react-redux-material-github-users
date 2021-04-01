import React from 'react';
import { Container, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from 'components/layout/AppBar';
import SearchBar from 'components/SearchBar';
import useTheme from './theme';

const muiTheme = useTheme();

const App = () => {
  return (
    <div>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <AppBar />
        <Container maxWidth="md">
          <SearchBar />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;

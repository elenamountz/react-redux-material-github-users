import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from 'components/layout/AppBar';
import useTheme from './theme';

const muiTheme = useTheme();

const App = () => (
  <ThemeProvider theme={muiTheme}>
    <CssBaseline />
    <AppBar />
  </ThemeProvider>
);

export default App;

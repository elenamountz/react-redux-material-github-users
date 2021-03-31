import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import useTheme from './theme';
import AppBar from '../layout/AppBar';

const muiTheme = useTheme();

const App = () => (
  <ThemeProvider theme={muiTheme}>
    <CssBaseline />
    <AppBar />
  </ThemeProvider>
);

export default App;

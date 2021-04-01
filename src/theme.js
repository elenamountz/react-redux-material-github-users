import { createMuiTheme } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

export default () =>
  createMuiTheme({
    palette: {
      primary: {
        main: purple[500],
      },
    },
    mainContainer: {
      padding: '30px',
    },
  });

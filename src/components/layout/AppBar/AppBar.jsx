import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core';
import ScrollTop from 'components/layout/AppBar/ScrollTop';
import HideOnScroll from 'components/layout/AppBar/HideOnScroll';

const useStyles = makeStyles(() => ({
  logo: {
    width: '40px',
    marginRight: '12px',
  },
}));

const AppBar = () => {
  const classes = useStyles();

  return (
    <div>
      <HideOnScroll>
        <MuiAppBar>
          <Toolbar disableGutters={false}>
            <img className={classes.logo} src="images/github.svg" alt="logo" />
            <Typography variant="h6">GitHub Users</Typography>
          </Toolbar>
        </MuiAppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default AppBar;

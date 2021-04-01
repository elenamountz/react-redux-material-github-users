import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    padding: '40px',
  },
  status: {
    fontSize: 120,
  },
  avatar: {
    width: '120px',
    height: '120px',
  },
});

const NotFound = () => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root} elevation={0}>
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item>
            <Typography variant="h1" className={classes.status}>
              4
            </Typography>
          </Grid>
          <Grid item>
            <Avatar alt="hey" src="github.svg" className={classes.avatar} />
          </Grid>
          <Grid item>
            <Typography variant="h1" className={classes.status}>
              4
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={0} justify="center" alignItems="flex-end">
          <Typography variant="h4">Not found, try again...</Typography>
        </Grid>
      </Paper>
    </>
  );
};

export default NotFound;

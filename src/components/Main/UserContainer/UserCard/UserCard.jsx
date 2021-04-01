import { Avatar, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import UserInfo from './UserInfo';

const useStyles = makeStyles(() => ({
  root: {
    padding: '40px',
  },
  avatar: {
    width: '150px',
    height: '150px',
  },
}));

const UserCard = ({ user }) => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <Grid container justify="flex-start" alignItems="center" spacing={4}>
          <Grid item>
            <Avatar
              alt="github.svg"
              src={user.avatar_url}
              className={classes.avatar}
            />
          </Grid>
          <Grid item sm={8}>
            <UserInfo
              name={user.name}
              location={user.location}
              bio={user.bio}
              url={user.html_url}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default UserCard;

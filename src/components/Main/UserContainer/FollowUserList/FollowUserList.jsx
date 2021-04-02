import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import {
  selectUserFollowers,
  selectFollowersError,
} from 'redux/selectors/followersSelector';
import {
  selectUserFollowing,
  selectFollowingError,
} from 'redux/selectors/followingSelector';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FollowUserItem from './FollowUserItem';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 700,
    overflow: 'auto',
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}));

const FollowUserList = ({ type }) => {
  const classes = useStyles();

  const followers = useSelector(selectUserFollowers, shallowEqual);
  const followersError = useSelector(selectFollowersError, shallowEqual);
  const foundFollowers = followersError === null;

  const following = useSelector(selectUserFollowing, shallowEqual);
  const followingError = useSelector(selectFollowingError, shallowEqual);
  const foundFollowing = followingError === null;

  const followersArray = foundFollowers ? [...followers] : [];
  const followingArray = foundFollowing ? [...following] : [];

  const usersToShow = type === 'followers' ? followersArray : followingArray;

  return (
    <>
      <Paper className={classes.root} elevation={0}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {usersToShow.map((user) => (
            <Grid item xs={12} sm={12} md={6} key={user.id}>
              <FollowUserItem user={user} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
};

export default FollowUserList;

import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import NotFound from 'components/common/NotFound';
import { selectUserData, selectUserError } from 'redux/selectors/userSelector';
import { makeStyles, Paper } from '@material-ui/core';
import UserCard from './UserCard';
import UserTabs from './UserTabs';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
}));

const UserContainer = () => {
  const classes = useStyles();
  const user = useSelector(selectUserData, shallowEqual);
  const error = useSelector(selectUserError, shallowEqual);
  const foundUser = error === null;

  return (
    <div className={classes.root}>
      {foundUser ? (
        <div>
          <Paper elevation={0}>
            <UserCard user={user} />
            <UserTabs />
          </Paper>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default UserContainer;

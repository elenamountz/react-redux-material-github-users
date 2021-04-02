import React, { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { fetchUser } from 'redux/actions/userActions';
import { fetchRepos } from 'redux/actions/reposActions';
import { fetchFollowers } from 'redux/actions/followersActions';
import { fetchFollowing } from 'redux/actions/followingActions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderColor: theme.palette.primary.main,
  },
  iconButton: {
    color: theme.palette.primary.main,
  },
}));

const SearchBar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [username, setUsername] = useState('elenamountz');

  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
  };

  const batchDispatch = () => {
    dispatch(fetchUser(username));
    dispatch(fetchRepos(username));
    dispatch(fetchFollowers(username));
    dispatch(fetchFollowing(username));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (username) {
      batchDispatch();
    }
  };

  useEffect(() => {
    batchDispatch();
  }, [dispatch]);

  return (
    <div>
      <Paper component="form" className={classes.root} elevation={0}>
        <InputBase
          fullWidth
          autoFocus
          placeholder="Search username..."
          inputProps={{
            style: {
              paddingLeft: '40px',
            },
          }}
          onChange={handleUsernameInput}
        />
        <IconButton
          onClick={handleSearch}
          type="submit"
          className={classes.iconButton}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;

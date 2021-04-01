import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

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
  const classes = useStyles();
  const [, setUsername] = useState('');

  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

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
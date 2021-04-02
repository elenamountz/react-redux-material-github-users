import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { useSelector, shallowEqual } from 'react-redux';
import {
  selectUserRepos,
  selectReposError,
} from 'redux/selectors/reposSelector';
import RepoItem from './RepoItem';

const useStyles = makeStyles((theme) => ({
  muiListPadding: {
    marginTop: 0,
    marginBottom: 0,
  },
  paper: {
    maxHeight: 700,
    overflow: 'auto',
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}));

const Repos = () => {
  const classes = useStyles();
  const repos = useSelector(selectUserRepos, shallowEqual);
  const error = useSelector(selectReposError, shallowEqual);
  const foundRepos = error === null && repos.length > 0;

  return (
    foundRepos && (
      <Paper className={classes.paper} elevation={0}>
        <List disablePadding>
          {repos.map((repo) => (
            <div key={repo.id}>
              <RepoItem repo={repo} />
            </div>
          ))}
        </List>
      </Paper>
    )
  );
};

export default Repos;

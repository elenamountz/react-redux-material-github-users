import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles(() => ({
  root: {
    border: '1px solid',
    borderRadius: '5px',
    marginBottom: '1rem',
    color: grey[200],
  },
  name: {
    color: grey[900],
  },
  button: {
    margin: '1rem',
  },
}));

const RepoItem = ({ repo }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ListItem>
        <ListItemText
          primary={
            <Typography variant="h6" component="span" className={classes.name}>
              {repo.name}
            </Typography>
          }
          secondary={repo.description}
        />
      </ListItem>
      <Button
        size="small"
        variant="outlined"
        color="primary"
        className={classes.button}
        endIcon={<ArrowRightAltIcon />}
        target="_blank"
        href={repo.html_url}
      >
        Github repo
      </Button>
    </div>
  );
};

export default RepoItem;

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles({
  root: {
    border: '1px solid',
    borderRadius: '5px',
    marginBottom: '1rem',
    color: grey[200],
  },
  name: {
    color: grey[900],
    fontWeight: 500,
  },
  avatar: {
    width: '60px',
    height: '60px',
  },
});

const FollowUserItem = ({ user }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card elevation={0}>
        <CardHeader
          avatar={
            <Avatar
              className={classes.avatar}
              alt="./images/logo2.svg"
              src={user.avatar_url}
            />
          }
          title={
            <Typography
              variant="subtitle1"
              component="span"
              className={classes.name}
            >
              {user.login}
            </Typography>
          }
          subheader={
            <Link
              href={user.html_url}
              target="_blank"
              rel="noopener"
              underline="none"
              variant="body2"
            >
              {user.html_url}
            </Link>
          }
        />
      </Card>
    </div>
  );
};

export default FollowUserItem;

import React from 'react';
import PlaceIcon from '@material-ui/icons/Place';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  bio: {
    marginTop: '1rem',
  },
  userName: {
    fontWeight: 'bold',
  },
  location: {
    color: 'gray',
  },
});

const UserInfo = ({ name, location, bio, url }) => {
  const classes = useStyles();
  return (
    <div>
      <Grid item container direction="column">
        <Grid item>
          <Typography variant="h4" className={classes.userName}>
            {name}
          </Typography>
        </Grid>
        {location && (
          <Grid container item>
            <Grid item>
              <Typography className={classes.location}>
                <PlaceIcon fontSize="small" />
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.location} variant="subtitle2">
                {location}
              </Typography>
            </Grid>
          </Grid>
        )}
        <Grid item className={classes.bio}>
          <Typography variant="subtitle1">{bio}</Typography>
        </Grid>
        <Grid item className={classes.bio}>
          <Button
            size="medium"
            variant="outlined"
            color="primary"
            className={classes.button}
            target="_blank"
            href={url}
          >
            More info
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserInfo;

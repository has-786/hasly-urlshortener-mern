import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
      marginTop:'50vh'
      },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <center>
        <CircularProgress style={{color:'purple'}}/>
        <div>Loading...Please wait</div>
      </center>
    </div>
  );
}

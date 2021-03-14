import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';
import {useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});



function Header(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history=useHistory()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const email=localStorage.getItem('email')

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<HomeIcon />} label="home" onClick={()=>history.push('/')}/>
        <Tab icon={<FavoriteIcon />} label="my urls" onClick={()=>history.push('/myurls')}/>
        <Tab icon={<AddIcon />} label="Add urls" onClick={()=>history.push('/addurls')}/>
      </Tabs>
    </Paper>
  );
}

export default Header



import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from './header';
import axios from 'axios'
import url from '../components/url'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import addvideos from '../actions/addVideos'
import {bindActionCreators} from 'redux'

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow:'0px 0px 3px 3px green',
    padding:'30px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  tabLink : {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    boxShadow:'0px 0px 3px 3px green',
    padding:'30px'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Addvideo(props)
{
  const classes = useStyles();

  const email=localStorage.getItem('email');
  if(email!='syedhasnain9163@gmail.com')props.history.push('/');

  const [name,setName]=useState("")
  const [tags,setTags]=useState("")
  const [link,setLink]=useState("")
  const [loader,setLoader]=useState('none')

  return <>
    <Header {...props}/>
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Paper  elevation={3}  className={classes.paper}>
      <CircularProgress style={{position:'fixed',top:'70px',display:loader}}/>

        <Avatar className={classes.avatar}>
          <VideoCallIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Video
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Name"
            value={name} onChange={(evt)=>setName(evt.target.value) } />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Tags"
              value={tags} onChange={(evt)=>setTags(evt.target.value) } />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Link"
                value={link} onChange={(evt)=>setLink(evt.target.value) } />

               <Button  type="submit"
               fullWidth
               variant="contained"
               color="primary"
               onClick={(evt)=>{evt.preventDefault(); if(link){setLoader('block'); props.action.addvideos(name,tags,link).then(()=>{setLoader('none'); props.history.push('/video');}).catch(err=>{setLoader('none'); props.history.push('/signin');});  }}}>Submit</Button>
        </form>
      </Paper>
    </Container>
    </>

}

const mapStateToProps=(state)=>{
  return {video:state.videoReducer}
}

const mapDispatchToProps=(dispatch)=>{
  return {action:bindActionCreators({addvideos}, dispatch)}

}
export default connect(mapStateToProps,mapDispatchToProps)(Addvideo);

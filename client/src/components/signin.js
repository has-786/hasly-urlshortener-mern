import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import url from '../url'
import Header from './header'
import CircularProgress from '@material-ui/core/CircularProgress';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding:'50px',
    boxShadow:'0px 0px 5px 5px #00c400'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  tabLink : {
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signin(props) {
  const classes = useStyles();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [loader,setLoader]=useState('none')


  const login=(event)=>{
    setLoader('block')
    event.preventDefault();
    const data={email,pass:password};

    axios.post(url+'/localSignin',data)
    .then((response)=>{
      setLoader('none')
      const body=response.data
      let email=null,name=null,token=null,path=null;

      if(body.status==1){

        email=body.email;name=body.name;token=body.token;path=body.path;
        toast.success('Signed in successfully',{autoClose:1500})

				localStorage.setItem('email',email);
				localStorage.setItem('name',name);
        localStorage.setItem('token',token);

        props.history.push('/');
      }
      else toast.error('Something went wrong',{autoClose:2000});

    })
  //  .catch(err=>toast.error('Something went wrong'+err,{autoClose:1000}) );
	.catch(err=>{setLoader('none'); toast.error('Something went wrong',{autoClose:2000}); });
}



  return (
    <>

      <Container component="main" maxWidth="xs">

        <CssBaseline />

        <Paper elevation={3}  className={classes.paper}>
        <CircularProgress style={{position:'fixed',top:'70px',display:loader}}/>

          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(evt)=>setEmail(evt.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(evt)=>setPassword(evt.target.value)}
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={login}
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to='/changePassword'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  Don't have an account?
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
        <Box mt={8}>
        <Link to="/" variant="body2">
                  Back to Home
        </Link>
        </Box>
      </Container>
    </>
  );
}

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
import addproducts from '../actions/addProducts'
import {bindActionCreators} from 'redux'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
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

function Addproduct(props)
{
  const classes = useStyles();
  const email=localStorage.getItem('email');
  if(email!='syedhasnain9163@gmail.com')props.history.push('/');
  const [name,setName]=useState("")
  const [price,setPrice]=useState(0)
  const [desc,setDesc]=useState("")
  const [imgs,setImgs]=useState(null)
  const [loader,setLoader]=useState('none')

  return    <>
   <Header {...props}/>

    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Paper   elevation={3}  className={classes.paper}>
      <CircularProgress style={{position:'fixed',top:'70px',display:loader}}/>

        <Avatar className={classes.avatar}>
          <AddPhotoAlternateIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Product
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
              label="Description"
              value={desc} onChange={(evt)=>setDesc(evt.target.value) } />

              <TextField
                variant="outlined"
                margin="normal"
                type='Number'
                required
                fullWidth
                label="Price"
                value={price} onChange={(evt)=>setPrice(evt.target.value) } />
              <br /><br /><br />
              <input type="file" id="files" name="files"  multiple onChange={(evt)=>setImgs(evt.target.files) }  />
              <br /><br /><br />
              <Button type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={(evt)=>{evt.preventDefault(); if(imgs){setLoader('block'); props.action.addproducts(name,desc,price,imgs,props.history.push).then(()=>{setLoader('none');props.history.push('/paintings');}).catch(err=>{setLoader('none'); props.history.push('/signin');});} }}>Submit</Button>
        </form>
      </Paper>
    </Container>
      </>

}


const mapStateToProps=(state)=>{
  return {product:state.prodReducer}
}

const mapDispatchToProps=(dispatch)=>{
  return {action:bindActionCreators({addproducts}, dispatch)}
}
export default connect(mapStateToProps,mapDispatchToProps)(Addproduct);

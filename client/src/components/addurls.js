import React,{ useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Footer from './footer'
import url from '../url'
import axios from 'axios'
import Header from './header'
import CircularProgress from '@material-ui/core/CircularProgress'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Showurl from './showurl';
toast.configure()

const useStyles = makeStyles({
  root: {
    width:'100%',
    height:'100%',
    boxShadow: "0px 0px 8px 8px #00c400"
  },
  value:{
      color:'#00c400',
      fontSize:'17px'


  },
  title:{
    fontSize:'17px',
    paddingRight:'10px'
  },
  a:{
    textDecoration:'none'
  },
  table:{
    width:'100%'
  }

});


export default function Addurls(props){
    const classes = useStyles();

    const email=localStorage.getItem('email')
    const token=localStorage.getItem('token')
    const [name,setName]=useState("")
    const [newUrl,setNewUrl]=useState("")
    const [urlobj,setUrlobj]=useState(null)
    const [loader,setLoader]=useState('none')

  
    const addurl=()=>{
        setLoader('block')

        axios.get(url+`/set?url=${newUrl}&email=${email}&name=${name}`)
        .then(response=>{
            setLoader('none')
            const body=response.data

            if(body.status==1)setUrlobj(body.url)
            else toast.error("Something went wrong",{autoclose:2000})
        })
        .catch(err=>{ setLoader('none');        toast.error(err,{autoclose:2000}); })
    }  

    return <div>
            <center>

      <center><CircularProgress style={{display:loader}}/></center>

      <br />
      <div style={{width:'500px',maxWidth:'90%'}}>
      <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Enter name"
              value={name}
              onChange={(evt)=>setName(evt.target.value)}
            />
        <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Enter long url"
              value={newUrl}
              onChange={(evt)=>setNewUrl(evt.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={addurl}
              className={classes.submit}
            >
              Add
            </Button>

            <br /><br /><br />
           {(urlobj)? 
          <Showurl {...{urlobj,email}}/>
          :null
          }
            <Footer  {...props}/>

            </div>
          </center>

        </div>





}
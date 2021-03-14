import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Footer from './footer'
import Showurl from './showurl'

import url from '../url'
import axios from 'axios'
import Header from './header'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const useStyles = makeStyles({
  root: {
    maxWidth:'90%',
    height:'100%',
    boxShadow: "0px 0px 8px 8px #00c400"
  },
  value:{
      color:'#00c400',
      fontSize:'17px',
      display:'flex',
      flexDirection:'row wrap'
  },
  title:{
    fontSize:'17px',
    paddingRight:'50px'
  },
  a:{
    textDecoration:'none'
  }
});

export default function Myurls(props) {

  const classes = useStyles();
  const email=localStorage.getItem('email')
  const token=localStorage.getItem('token')
  const [myurls,setMyurls]=useState([])
  const secureAxios=axios.create({baseURL:url,
    headers:{
      "Authorization":`bearer ${token}`
    }})


  useEffect(()=>{

      secureAxios.get('myurls')
      .then(response=>{
          const body=response.data
          if(body.status==1){
              setMyurls(body.myurls)
          }
          else toast.error("Something went wrong",{autoclose:2000})
      })
      .catch(err=>{toast.error(err,{autoComplete:2000}); props.history.push('/signin')})

    },[])


  return (
      <>
      <center>
      <br /><br />
      {
         (myurls.length==0)?
         <div ><br /><br />No urls to show</div>
          : 
          <div style={{display:'flex',flexFlow:'row wrap',padding:'10px',justifyContent:'flex-start'}}>
         { myurls.map(urlobj=>{
            return <Showurl {...{urlobj,email}}/>
          })
        }
          </div>
         


    
      }
          <div style={{width:'400px',maxWidth:'100%'}}>
           <Footer  {...props}/>
          </div>
      </center>

    </>
  );
}

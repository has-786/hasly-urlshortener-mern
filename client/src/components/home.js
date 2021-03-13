import React,{ useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Fab from '@material-ui/core/Fab'
import TextField from '@material-ui/core/TextField';
import Footer from './footer'
import Showurl from './showurl'

import debounce from '../debounce'
import url from '../url'
import axios from 'axios'
import Header from './header'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const useStyles = makeStyles({
  root: {
    width:'400px',
    maxWidth:'90%',
    height:'100%',
    boxShadow: "0px 0px 8px 8px #00c400"
  },
  value:{
      color:'#00c400',
      fontSize:'17px',
      wordBreak: 'break-all'
  },
  title:{
    fontSize:'17px',
    paddingRight:'50px'
  },
  a:{
    textDecoration:'none'
  }

});


function Home(props) {
  const classes = useStyles();

  const email=localStorage.getItem('email')
  const token=localStorage.getItem('token')

  const [urlobj,setUrlobj]=useState(null)
  const [search,setSearch]=useState("")
  const [fetchedUrls,setFetchedUrls]=useState([])

  function searching(evt){
    evt.preventDefault()

    axios.post(url+'/searchUrls',{searchstring:evt.target.value})
    .then(response=>{
        const body=response.data
        if(body.status)setFetchedUrls(body.urls)
        else toast.error('Something went wrong',{autoComplete:2000})
    })
    .catch(err=>{toast.error('Something went wrong',{autoComplete:2000}); })
  }

  const debouncedSearching=debounce(searching,300)

  const handleSearch=(evt)=>{
     evt.preventDefault()
     debouncedSearching(evt)
  }


  return (
    <div><center>
      <Header {...props} />
      <br />
        <br />
      { (urlobj)?
          <Showurl {...{urlobj,email}}/>
            :
            null
        }
        
      <br />
      <div style={{width:'400px',maxWidth:'100%'}}>
      <TextField fullWidth='true' required label="Search Urls" value={search} onChange={(evt)=>{ setSearch(evt.target.value); handleSearch(evt); }} />
      <List>
      {
        fetchedUrls.map(url=>{
          return <ListItem button>
                    <ListItemText style={{color:'#00c400'}} secondary={url.shortUrl} primary={url.longUrl} onClick={()=>{setSearch(""); setFetchedUrls([]); setUrlobj(url);} }/>
                  </ListItem>
        })
      }
      </List>
      <Footer {...{props,email}}/>
      </div>
      </center>

    </div>
  );
}

export default Home;

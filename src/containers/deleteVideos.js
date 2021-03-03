import url from '../components/url';
import {useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Header from './header';
import axios from 'axios';

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress';

import deletevideo from '../actions/deleteVideos'
import {bindActionCreators} from 'redux'


function DeleteVideos(props)
{
  const email=localStorage.getItem('email');
  if(email!='syedhasnain9163@gmail.com')props.history.push('/');
  const [loader,setLoader]=useState('none')

  return <div>
          <Header {...props}/>

          <center>
          <div style={{backgroundColor:'green',marginTop:'0px',padding:'10px'}}>
            <span style={{color:'white'}}>Delete Video</span>
          </div>
                   <br></br><br></br>
          <center><CircularProgress style={{top:'70px',display:loader}}/></center>

          <TextField
            variant="outlined"
            margin="normal"
            required
            id="id"
            label="Enter Id"
            autoFocus
          />
            <br />
            <Button color='secondary' variant="contained" onClick={()=>{ setLoader('block'); props.action.deletevideo(document.getElementById('id').value).then(()=>{setLoader('none');props.history.push('/');}).catch(err=>{setLoader('none');props.history.push('/signin');});} }>Delete</Button>
          </center>
        </div>
}


const mapStateToProps=(state)=>{}

const mapDispatchToProps=(dispatch)=>{
  return {action:bindActionCreators({deletevideo}, dispatch)}

}

export default connect(mapStateToProps,mapDispatchToProps)(DeleteVideos);

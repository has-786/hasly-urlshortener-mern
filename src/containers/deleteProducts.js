import url from '../components/url';
import {useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Header from './header';
import axios from 'axios';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress';

import deleteproduct from '../actions/deleteProducts'
import {bindActionCreators} from 'redux'


function DeleteProducts(props)
{
  const email=localStorage.getItem('email');
  if(email!='syedhasnain9163@gmail.com')props.history.push('/');
  const [loader,setLoader]=useState('none')

  return <div>
          <Header {...props}/>

          <center>
          <div style={{backgroundColor:'green',marginTop:'0px',padding:'10px'}}>
            <span style={{color:'white'}}>Delete Painting</span>
          </div>
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
            <Button color='secondary' variant="contained" onClick={()=>{props.action.deleteproduct(document.getElementById('id').value).then(()=>{setLoader('none');props.history.push('/');}).catch(err=>{setLoader('none');props.history.push('/signin');});} }>Delete</Button>
          </center>
        </div>
}
//603cb56c03b55a6e565a3e7f

const mapStateToProps=(state)=>{}

const mapDispatchToProps=(dispatch)=>{
  return {action:bindActionCreators({deleteproduct}, dispatch)}

}

export default connect(mapStateToProps,mapDispatchToProps)(DeleteProducts);

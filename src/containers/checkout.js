import React,{useState} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from  '../components/header';
import url from '../components/url';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import MoneyIcon from '@material-ui/icons/Money';
import PaymentIcon from '@material-ui/icons/Payment';
import {bindActionCreators} from 'redux'
import CircularProgress from '@material-ui/core/CircularProgress';

import {loadCart} from '../actions/cart'
import * as orderActions from '../actions/checkout'


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    boxShadow:'0px 0px 2px 2px green'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Checkout(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  let s=0;

  if(props.cart.length==0)props.action.loadCart();
  props.cart.map(c=>s+=c.price*c.count);
  const [loader,setLoader]=useState('none')

  const user=localStorage.getItem('name');
  const email=localStorage.getItem('email');

  if(!user){email=user="";props.history.push('/');}

  return (
    <center>

    <div style={{width:'275px',marginTop:'100px'}}>
    <center><CircularProgress style={{top:'70px',display:loader}}/></center>

      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textPrimary" >
            {user}
          </Typography>
          <Typography className={classes.pos} color="textSecondary" gutterBottom>
             {email}
          </Typography>
          <br />
          <Typography variant="h5" component="h2">
               Rs.&nbsp; {s} &nbsp;&nbsp;

          </Typography>
            <br />
            <MoneyIcon style={{width:'40px',height:'40px'}} color='primary' onClick={()=>{setLoader('block'); props.action.placecashorder(s,props.cart,"Cash").then(()=>{setLoader('none');props.history.push('/order');}).catch(err=>{setLoader('none');props.history.push('/signin');});  }} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <PaymentIcon  style={{width:'40px',height:'40px'}} color='secondary' onClick={()=>{setLoader('block'); props.action.placeonlineorder(s,props.cart,"Paid Online",props.history.push).then(()=>setLoader('none')); }} />

        </CardContent>
        <CardActions>

        </CardActions>
      </Card>
    </div>
    </center>
  );
}


const mapStateToProps=(state)=>{
  return {user:state.userReducer,cart:state.cartReducer,order:state.orderReducer}
}

const mapDispatchToProps=(dispatch)=>{
  return {action:bindActionCreators({loadCart,...orderActions},dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Checkout));

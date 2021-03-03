import React,{useState} from 'react';
import Showorder from '../components/showorders';
import Header from '../containers/header';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import url from '../components/url';
import axios from 'axios'
import '../css/product.css'
import CircularProgress from '@material-ui/core/CircularProgress';

import {bindActionCreators} from 'redux'

import loadOrder from '../actions/order'

 function Order(props){
   const [flag,setFlag]=useState(0);
   const [loader,setLoader]=useState('none');
   if(props.order.length==0 && !flag){setFlag(1); setLoader('block');
    props.action.loadOrder(props.history.push).then(()=>{setLoader('none');}).catch(err=>{setLoader('none');props.history.push('/signin');});
   }
   const [search,setSearch]=useState('');
   var arr=[];
   if(search.trim()=='')arr=props.order;
   else arr=props.order.filter(o=>o.cart.filter(c=>c.name.trim().toLowerCase().includes(search.trim().toLowerCase())).length!=0);

   return <div>
     <Header {...props} />

     <div class='body'>

       <div style={{backgroundColor:'green',marginTop:'0px',padding:'10px'}}>
       <span style={{color:'white'}}>My Orders</span>
       <input type="text" placeholder="Search Orders" name="search" style={{float:'right'}} value={search} onChange={(evt)=>setSearch(evt.target.value)}  />
       </div>
       <center><CircularProgress style={{top:'70px',display:loader}}/></center>

        <br />

        {arr.map(o=><Showorder {...o} />)}
      </div>
    </div>

}



const mapStateToProps=(state)=>{
  return {order:state.orderReducer,cart:state.cartReducer}
}

const mapDispatchToProps=(dispatch)=>{
  return {action:bindActionCreators({loadOrder},dispatch)}

}

export default connect(mapStateToProps,mapDispatchToProps)(Order);

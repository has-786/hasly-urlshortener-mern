import React,{useState} from 'react';
import Showproduct from '../components/showproducts';
import Header from '../containers/header';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import url from '../components/url';
import '../css/product.css';
import Button from '@material-ui/core/Button'
import * as cartActions from '../actions/cart'
import {bindActionCreators} from 'redux'
import CircularProgress from '@material-ui/core/CircularProgress';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


 function Cart(props){
   var s=0;
   const [flag,setFlag]=useState(0);
   const [loader,setLoader]=useState('none')

   if(props.cart.length==0 && !flag){ setFlag(1);
      setLoader('block')
      props.action.loadCart(props.history.push).then(()=>{setLoader('none');}).catch(err=>{setLoader('none');props.history.push('/signin');})
     }
   props.cart.map(c=>s+=c.price*c.count);

   const [search,setSearch]=useState('');

   var arr=[];
   if(search.trim()=='')arr=props.cart;
   else arr=props.cart.filter(c=>c.name.toLowerCase().includes(search.trim().toLowerCase()) || c.desc.toLowerCase().includes(search.trim().toLowerCase()));
   const token=localStorage.getItem('token')

  return <div>

            <div style={{backgroundColour:'white',position:'fixed',width:'100%',zIndex:10}}>
                <Header {...props} />
             </div>
  <div class='body'>

        <div style={{backgroundColor:'#8b5a2b',marginTop:'0px',padding:'15px'}}>
           <span style={{color:'white',fontSize:'25px'}}>Cart</span>
           <input type="text" placeholder="Search Cart"  style={{float:'right',fontSize:'15px',padding:'5px 5px 5px 7px',borderRadius:'30px'}} value={search} onChange={(evt)=>{ setSearch(evt.target.value)}}  />
        </div>
      <center><CircularProgress style={{top:'70px',display:loader}}/></center>

      <br></br>

                {(s>=1)?<Button variant="contained" onClick={()=>props.history.push('/checkout')} color='secondary' style={{float:'right'}}>Checkout</Button>:null}
                <div style={{padding:'5px'}}><b>Total Amount:</b><Button color='primary'>Rs.&nbsp; {s}</Button></div>
                <br />
                <div class='show'>
                  {arr.map(c=>
                      <Showproduct {...props} {...c} {...{token}} inccartproduct={props.action.inccartproduct} deccartproduct={props.action.deccartproduct}   removecartproduct={props.action.removecartproduct}/>
                    )}
                </div>
   </div>
  </div>
}



const mapStateToProps=(state)=>{
  return {cart:state.cartReducer}
}

const mapDispatchToProps=(dispatch)=>{
    return {action:bindActionCreators(cartActions,dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);

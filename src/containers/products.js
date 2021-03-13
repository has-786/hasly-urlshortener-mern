import React,{useState,useRef} from 'react';
import Showproduct from '../components/showproducts';
import Header from './header';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import url from '../components/url';
import * as cartActions from '../actions/cart'
import {bindActionCreators} from 'redux'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress';
import '../css/product.css';



 function Product(props){

   const [flag,setFlag]=useState(0);
   const [loader,setLoader]=useState('none')
   if(props.product.length==0 && !flag)
   {
      setFlag(1);
      setLoader('block')
      props.action.loadProducts('product',props.history.push).then(()=>{setLoader('none');}).catch(err=>{setLoader('none');props.history.push('/signin');})
      props.action.loadCart(props.history.push);
   }

   props.product.map(p=>{
     var obj=props.cart.find(c=>c._id===p._id);
     if(obj)p.count=obj.count;
     else p.count=0;
   });

   const [search,setSearch]=useState('');
   var arr=[];
   if(search.trim()=='')arr=props.product;
   else arr=props.product.filter(c=>c.name.toLowerCase().includes(search.trim().toLowerCase()) || c.desc.toLowerCase().includes(search.trim().toLowerCase()));

   const token=localStorage.getItem('token')
  return <div >
 <div style={{backgroundColour:'white',position:'fixed',width:'100%',zIndex:10}}>
                <Header {...props} />
             </div>
              <div class='body'>

                <div style={{backgroundColor:'#8b5a2b',marginTop:'0px',padding:'15px'}}>
                  <span style={{color:'white',fontSize:'25px'}}>Furnitures</span>
                  <input type="text" placeholder="Search Furnitures"  style={{float:'right',fontSize:'15px',padding:'5px 5px 5px 7px',borderRadius:'30px'}} value={search} onChange={(evt)=>{ setSearch(evt.target.value)}}  />
                </div>
                <center><CircularProgress style={{top:'70px',display:loader}}/></center>

                <br></br>  <br></br>  <br></br>

                <div  style={{display:'flex',flexFlow:'row wrap'}}>
                {arr.map(p=>  <Showproduct {...props} {...p} {...{token}} inccartproduct={props.action.inccartproduct} deccartproduct={props.action.deccartproduct} removecartproduct={props.action.removecartproduct}/>    )}
                </div>
              </div>
        </div>
}



const mapStateToProps=(state)=>{
  return {product:state.prodReducer.filter(p=>p.type=='product'),cart:state.cartReducer}
}
const mapDispatchToProps=(dispatch)=>{
  return {action:bindActionCreators(cartActions,dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);

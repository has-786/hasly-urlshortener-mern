import React from 'react';
import Showorder from '../components/showorders';
import Header from '../components/header';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import url from '../components/url';

 function Order(props){
   if(props.order.length==0)props.loadOrder();

   return <div >
   <Header len={props.cart.length}/>
   <br></br>
              {props.order.map(o=><Showorder {...o} />
              )}
        </div>
}



const mapStateToProps=(state)=>{
  return {order:state.orderReducer,cart:state.cartReducer}
}

const mapDispatchToProps=(dispatch)=>{
  return {
    loadOrder:()=>{
      fetch(url+'loadOrder',{ method:'POST',body:JSON.stringify({email:localStorage.getItem('email')}),headers:{'Content-type':'application/json'} })
      .then(response=>{ return response.json()})
      .then((body)=>{
               //alert(body.msg);
               dispatch({type:'load_order',payload:body.order});
       })
      .catch(err=>alert(JSON.stringify(err)));
    },

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Order);

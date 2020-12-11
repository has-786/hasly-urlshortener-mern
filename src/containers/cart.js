import React from 'react';
import Showcart from '../components/showcarts';
import Header from  '../components/header';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import url from '../components/url';

 function Cart(props){
   var s=0;
   if(props.cart.length==0)props.loadCart();
   props.cart.map(c=>s+=c.price*c.count);
  return <div >
  <Header len={props.cart.length}/>
            <Link to='/checkout' style={{float:'right'}}><button class='btn btn-danger'>Checkout</button></Link>
            <p class='btn btn-primary'>Total Amount:</p><p class='btn btn-success'>Rs.&nbsp; {s}</p>
            <br></br><br></br><br></br>
              {props.cart.map(c=><Showcart {...c} inccartproduct={props.inccartproduct} deccartproduct={props.deccartproduct}   removecartproduct={props.removecartproduct}/>
                )}

        </div>
}



const mapStateToProps=(state)=>{
  return {cart:state.cartReducer}
}

const mapDispatchToProps=(dispatch)=>{
  return {
    loadCart:()=>{
      fetch(url+'loadCart',{ method:'POST',body:JSON.stringify({email:localStorage.getItem('email')}),headers:{'Content-type':'application/json'} })
      .then(response=>{ return response.json()})
      .then((body)=>{
               //alert(body.msg);
               dispatch({type:'load_cart',payload:{cart:body.cart}});
       })
      .catch(err=>alert(JSON.stringify(err)));
    },

    inccartproduct:(id,name,desc,price,imgs,count)=>{
      const email=localStorage.getItem('email');
      if(!email){alert('Please login first'); return false; }
      //alert(JSON.stringify({email,id,name,desc,price,imgs,count}));
      fetch(url+'inccartproduct',{ method:'POST',body:JSON.stringify({email,id,name,desc,price,imgs,count}),headers:{'Content-type':'application/json'}})
      .then(response=>{ return response.json()})
      .then((body)=>{
               dispatch({type:'inc_cart_product',payload:{email,_id:id,name,desc,price,imgs,count}})
       })
      .catch(err=>alert(JSON.stringify(err)));


    },

      deccartproduct:(id,count)=>{
        if(count<=1)return;
        const email=localStorage.getItem('email');
        if(!email){alert('Please login first'); return false; }
        //alert(JSON.stringify({email,id,name,desc,price,imgs,count}));
        fetch(url+'deccartproduct',{ method:'POST',body:JSON.stringify({email,id}),headers:{'Content-type':'application/json'}})
        .then(response=>{ return response.json()})
        .then((body)=>{
                 dispatch({type:'dec_cart_product',payload:{id,count}})
         })
        .catch(err=>alert(JSON.stringify(err)));
      },
    removecartproduct:(id)=>{
      const email=localStorage.getItem('email');
      if(!email){alert('Please login first'); return false; }
      //alert(JSON.stringify({email,id,name,desc,price,imgs,count}));
      fetch(url+'removecartproduct',{ method:'POST',body:JSON.stringify({email,id}),headers:{'Content-type':'application/json'}})
      .then(response=>{ return response.json()})
      .then((body)=>{
               dispatch({type:'remove_cart_product',payload:{id}})

       })
      .catch(err=>alert(JSON.stringify(err)));
    }


  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);

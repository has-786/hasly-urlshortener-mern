import React from 'react';
import Showproduct from '../components/showproducts';
import Header from '../components/header';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import url from '../components/url';

 function Product(props){

   if(props.product.length==0)
   {
      props.loadProducts();
      props.loadCart();
   }

    //alert(JSON.stringify(props.cart));
   props.product.map(p=>{
    var obj=props.cart.find(c=>c._id==p._id);
     if(obj)p.count=obj.count;
     else p.count=0;
   });
  return <div >
              <Header len={props.cart.length}/>
              <br></br>
              {props.product.map(p=>
                <div>
                <Showproduct {...p} inccartproduct={props.inccartproduct} deccartproduct={props.deccartproduct} removecartproduct={props.removecartproduct}/>
                </div>
              )}
        </div>
}



const mapStateToProps=(state)=>{
  return {product:state.prodReducer,cart:state.cartReducer}
}

const mapDispatchToProps=(dispatch)=>{
  return {
      loadProducts:()=>{
        fetch(url+'loadImg',{ method:'POST',body:{}})
        .then(response=>{ return response.json()})
        .then((body)=>{
                 //alert(body.msg);
                 dispatch({type:'load_prod',payload:{products:body.products}});
         })
        .catch(err=>alert(JSON.stringify(err)));
      },

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

export default connect(mapStateToProps,mapDispatchToProps)(Product);

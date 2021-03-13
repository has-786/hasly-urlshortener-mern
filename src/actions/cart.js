import axios from 'axios'
import url from '../components/url'
import initialize from './initialize'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

let secureAxios;

export function loadProducts(type,push){
  return function(dispatch){
    secureAxios=initialize(secureAxios)

    return axios.post(url+'/loadImg',{type:type})
           .then((response)=>{
            dispatch({type:'load_prod',payload:{products:response.data.products}});
           })
           .catch(err=>push('/signin'));
    }
 }

export function loadCart(push,caller){
  return function(dispatch){
    secureAxios=initialize(secureAxios)

    return secureAxios.get('loadCart')
           .then((response)=>{
                    const body=response.data
                    dispatch({type:'load_cart',payload:{cart:body.cart}});
           })
       //    .catch(err=>(caller!='Header')?push('/signin'):null);
       .catch(err=>{});
   }
}

export function inccartproduct(id,name,desc,price,imgs,count,push){
  return function(dispatch){
    secureAxios=initialize(secureAxios)

    const email=localStorage.getItem('email')
    if(!email){toast.error('Please login first',{autoClose:2000}); return false; }
    dispatch({type:'inc_cart_product',payload:{email,_id:id,name,desc,price,imgs,count}})
    return secureAxios.post('inccartproduct',{email,id,name,desc,price,imgs,count})
            .then((response)=>{
                     const body=response.data
                //     if(body.status==1)dispatch({type:'inc_cart_product',payload:{email,_id:id,name,desc,price,imgs,count}})
             })
             .catch(err=>push('/signin'));
    }
}

export function deccartproduct(id,count,push){
  return function(dispatch){
      secureAxios=initialize(secureAxios)

      if(count<=1)return;

      const email=localStorage.getItem('email')
      if(!email){toast.error('Please login first',{autoClose:2000}); return false; }

      dispatch({type:'dec_cart_product',payload:{id,count}})

      secureAxios.post('deccartproduct',{email,id})
      .then((response)=>{
               const body=response.data
//               if(body.status==1)dispatch({type:'dec_cart_product',payload:{id,count}})
       })
       .catch(err=>push('/signin'));
  }
}


export function removecartproduct(id,push){
  return function(dispatch){
    secureAxios=initialize(secureAxios)
    const email=localStorage.getItem('email')

    if(!email){toast.error('Please login first',{autoClose:2000}); return false; }

    dispatch({type:'remove_cart_product',payload:{id}})
    secureAxios.post('removecartproduct',{email,id})
    .then((response)=>{
            const body=response.data
          //  if(body.status==1)dispatch({type:'remove_cart_product',payload:{id}})
     })
     .catch(err=>push('/signin'));
  }
}

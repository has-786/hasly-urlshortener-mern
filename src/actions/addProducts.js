import axios from 'axios'
import url from '../components/url'
import initialize from './initialize'

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
let secureAxios;


export default function addproducts(name,desc,price,imgs,push){

  return async function(dispatch){
              secureAxios=initialize(secureAxios)

              let formData=new FormData();
              formData.append('name',name);
              formData.append('desc',desc);
              formData.append('price',price);
              formData.append('type','product');
              for(var x = 0; x<imgs.length; x++)formData.append('imgs', imgs[x])


              const body=await secureAxios.post('insertImg',formData)
              .then((response)=>{
                       const body=response.data
                       toast.success(body.msg,{autoClose:2000});
                       return body
               })
              .catch(err=>{alert(JSON.stringify(err));
                           return {status:0};
              })

              return new Promise(function(resolve, reject) {
                    if(body.status==1){ dispatch({type:'add_prod',payload:body.product}); resolve(); }
                    else reject()
              });


    }
 }

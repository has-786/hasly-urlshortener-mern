import axios from 'axios'
import url from '../components/url'
import initialize from './initialize'

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

let secureAxios

export default function deleteproduct(id){
    return async function(dispatch){
         secureAxios=initialize(secureAxios)

         const body=await secureAxios.post('deleteProduct',{id})
                    .then((response)=>{
                             const body=response.data
                             toast.success(body.msg,{autoClose:2000});
                             return body
                     })
                    .catch(err=>alert(JSON.stringify(err)));

        return new Promise(function(resolve, reject) {
              if(body.status==1){dispatch({type:'del_prod',payload:id});resolve();}
              else reject()
        });
     }
  }

import axios from 'axios'
import url from '../components/url'
import initialize from './initialize'

let secureAxios

export default function loadOrder(push){
  return function(dispatch){
    secureAxios=initialize(secureAxios)

     return secureAxios.get('loadOrder')
    .then((response)=>{
             const body=response.data
             dispatch({type:'load_order',payload:body.order});
     })
     .catch(err=>push('/signin'));
  }
}

import axios from 'axios'
import url from '../components/url'

export default function initialize(secureAxios){
  const email=localStorage.getItem('email');
  const token=localStorage.getItem('token')
  secureAxios=axios.create({baseURL:url,
  headers:{
    "Authorization":`bearer ${token}`
  }})
  return secureAxios
}

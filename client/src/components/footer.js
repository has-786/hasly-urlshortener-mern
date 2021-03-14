import {useState,useEffect} from 'react'
import axios from 'axios'
import { Fab } from '@material-ui/core'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import PersonIcon from '@material-ui/icons/Person'
import url from '../url'
import {withRouter} from 'react-router-dom'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const signout=(props)=>
{
  localStorage.removeItem('token')
  localStorage.removeItem('email')
  localStorage.removeItem('name')
  props.history.push('/signin')
}
function Footer(props)
{
    const token=localStorage.getItem('token')
    const [isloggedin,setIsloggedin]=useState(false)
    const secureAxios=axios.create({baseURL:url,
        headers:{
        "Authorization":`bearer ${token}`
        }})

    useEffect(()=>{
        
      secureAxios.get('isloggedin')
      .then(response=>{
          const body=response.data
          if(body.status==1){
              setIsloggedin(true)
          }
          else toast.error("Something went wrong",{autoclose:2000})
      })
      .catch(err=>{toast.error(err,{autoComplete:2000});  })

    },[])
    return (isloggedin)?

    <Fab style={{width:'35px',height:'35px',float:'right',marginTop:'15px'}}>
        <MeetingRoomIcon color='secondary' style={{width:'30px',height:'30px'}} onClick={()=>signout(props)}/>
    </Fab>
    :
    <Fab style={{width:'35px',height:'35px',float:'right',marginTop:'15px'}}>
        <PersonIcon color='secondary' style={{width:'30px',height:'30px'}} onClick={()=>props.history.push('/signin')}/>
    </Fab>
    
}
export default Footer
import { Fab } from '@material-ui/core'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import PersonPinIcon from '@material-ui/icons/PersonPin'


const signout=(props)=>
{
  localStorage.removeItem('token')
  localStorage.removeItem('email')
  localStorage.removeItem('name')
  props.history.push('/signin')
}
export default function Footer({props,email})
{
    return (email)?
   
    <Fab style={{width:'30px',height:'30px',float:'right',marginTop:'15px'}}>
        <MeetingRoomIcon color='secondary' style={{width:'30px',height:'30px'}} onClick={signout.bind(this,props)}/>
    </Fab>
    :
    <Fab style={{width:'30px',height:'30px',float:'right',marginTop:'15px'}}>
        <PersonPinIcon color='secondary' style={{width:'30px',height:'30px'}} onClick={()=>props.history.push('/signin')}/>
    </Fab>
    
}
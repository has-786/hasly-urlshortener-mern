import axios from 'axios'
import url from '../components/url'


export default function loadVideos(push){
  return function(dispatch){


    return axios.get(url+'/loadVideo')
    .then(response=>{
             const body=response.data
             dispatch({type:'load_video',payload:body.video});
     })
    .catch(err=>push('/signin'));
  }
}

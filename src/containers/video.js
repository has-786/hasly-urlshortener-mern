import React,{useState} from 'react';
import Showvideo from '../components/showvideos';
import Header from './header';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import url from '../components/url';
import axios from 'axios';
import '../css/product.css';
import CircularProgress from '@material-ui/core/CircularProgress';


import {bindActionCreators} from 'redux'

import loadVideos from '../actions/video'


 function Video(props){

   const [flag,setFlag]=useState(0);
   const [loader,setLoader]=useState('none');
   if(props.video.length==0 && !flag)
   {
      setFlag(1)
      setLoader('block')
      props.action.loadVideos(props.history.push).then(()=>{setLoader('none');}).catch(err=>{setLoader('none');props.history.push('/signin');});
   }

   const [search,setSearch]=useState('');
   var arr=[];
   if(search.trim()=='')arr=props.video;
   else arr=props.video.filter(c=>c.name.toLowerCase().includes(search.trim().toLowerCase()) || c.tags.toLowerCase().includes(search.trim().toLowerCase()));



  return <div >
 <div style={{backgroundColour:'white',position:'fixed',width:'100%',zIndex:10}}>
                <Header {...props} />
             </div>
              <div class='body'>

                  <div style={{backgroundColor:'#8b5a2b',marginTop:'0px',padding:'10px'}}>
                    <span style={{color:'white'}}>Videos</span>
                    <input type="text" placeholder="Search Videos"  style={{float:'right'}} value={search} onChange={(evt)=>{ setSearch(evt.target.value)}}  />
                  </div>
                  <center><CircularProgress style={{top:'70px',display:loader}}/></center>

                  <br></br>  <br></br>  <br></br>
                  <div class='show'>
                  {arr.map(p=>  <Showvideo {...p}/>
                  )}
                  </div>

              </div>

        </div>
}



const mapStateToProps=(state)=>{
  return {video:state.videoReducer,cart:state.cartReducer}
}
const mapDispatchToProps=(dispatch)=>{
  return {action:bindActionCreators({loadVideos},dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(Video);

import React, {useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import url from '../components/url';
import Header from './header';

class Adddisk extends React.Component
{
  constructor(props){super(props);  this.state={name:"",price:0,size:"",duration:"",imgs:[{name:""}]}
  const user=localStorage.getItem('user');
  if(user!='Syed')this.props.history.push('/');

}
render(){
  return(
    <div style={{backgroundColor:"cyan"}}>
    <Header {...this.props}/>

    <center><h2 style={{width:'100%',backgroundColor:'green',padding:'10px',color:'white',marginTop:'0px'}}>Add Disk</h2><br></br><br></br>
    <input type='text' id='1' onChange={(evt)=>this.setState({name:evt.target.value})}/><br></br><br></br>
    <input type='number' id='2' onChange={(evt)=>this.setState({price:evt.target.value})}/><br></br><br></br>
    <input type='text'  onChange={(evt)=>this.setState({size:evt.target.value})}/><br></br><br></br>
    <input type='text'  onChange={(evt)=>this.setState({duration:evt.target.value})}/><br></br><br></br>
    <input type="file" id="files" name="files"  multiple onChange={(evt)=>this.setState({imgs:evt.target.files})}  /><br></br><br></br>
    <button  class='btn btn-sm btn-danger'  value='submit' onClick={()=>{this.props.add(this.state.name,this.state.size+", "+this.state.duration,this.state.price,this.state.imgs); this.props.history.push('/disk');}}>Submit</button><br></br>
    </center>
    </div>)
  }
}

const mapStateToProps=(state)=>{
  return {product:state.prodReducer}
}

const mapDispatchToProps=(dispatch)=>{
  return {
      add:(name,desc,price,imgs)=>{

          var formData=new FormData();
              formData.append('name',name);
              formData.append('desc',desc);
              formData.append('price',price);
              formData.append('type','disk');
              for(var x = 0; x<imgs.length; x++)
                  formData.append('imgs', imgs[x])

 	            fetch(url+'insertImg',{ method:'POST',body:formData})
              .then(response=>{ return response.json()})
              .then((body)=>{
                       alert(body.msg);
                       dispatch({type:'add_prod',payload:body.product});
               })
              .catch(err=>alert(JSON.stringify(err)));

               alert("Please Wait!! It may take some time");
        }
      }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Adddisk));

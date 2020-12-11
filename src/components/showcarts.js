import React from 'react';

export default function Showcart(props){

  return <div class='col-lg-2' style={{padding:'0px',border:'2px solid purple',borderRadius:'10px'}}>
              <div><img src={props.imgs[0]} class='img img-rounded' height="300px" width="100%" /></div>
              <div><b>Product ID: &nbsp; {props.id}</b></div>
              <div><b>{props.name}</b></div>
              <div><p>Rs.&nbsp;<b>{props.price}</b></p></div>
              <center><div>In cart: &nbsp; &nbsp;<button class='label label-success glyphicon glyphicon-plus' onClick={()=>props.inccartproduct(props._id,props.name,props.desc,props.price,props.imgs,props.count)}> </button>&nbsp;&nbsp;<b>{props.count}</b>&nbsp;&nbsp;<button class='label label-danger glyphicon glyphicon-minus' onClick={()=>props.deccartproduct(props._id,props.count)}> </button></div></center>
              <br></br><br></br>
              <center><div><button class='btn btn-sm btn-danger' onClick={()=>props.removecartproduct(props._id)}>Remove</button></div></center>
         </div>

}

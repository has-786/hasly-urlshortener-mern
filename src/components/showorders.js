import React from 'react';
import url from './url'
import '../css/product.css';
import Paper from '@material-ui/core/Paper'

export default function Showorder(props){

  return <Paper style={{padding:'20px',border:'2px solid #8b5a2b',boxShadow:"0px 0px 3px 3px #8b5a2b",margin:'10px',borderRadius:'20px'}}>

              <div>Order ID:<b  style={{color:'#8b5a2b'}}> {props._id}</b></div>
              <div>Rs.&nbsp;<b  style={{color:'#8b5a2b'}}>{props.price}</b></div>

              <hr></hr>
              <div><b class='btn btn-sm btn-success'>Products:</b></div><br></br>
              <div class='show'>
              {props.cart.map(c=>
                <div style={{padding:'20px'}}>
                  <div><img src={url+`/uploads/${c.imgs[0]}/${props.token}`} class='img img-rounded' height="100px" width="100px" /></div>
                  <div >
                      <b  >{c.name}</b>
                      <div><b  >{c.count}</b></div>
                      <p>Rs.&nbsp;<b>{c.price*c.count}</b></p>

                  </div>
                </div>

              )}
              </div>
              <hr />
              <div>Paid: &nbsp; &nbsp;<b style={{color:'#8b5a2b'}}>{props.mode}</b></div>
              <div>Ordered on:&nbsp;&nbsp; <b  style={{color:'#8b5a2b'}}>{props.timestamp}</b></div>
              <div>Status: <b  style={{color:'#8b5a2b'}}>{props.status}</b></div>
          </Paper>

}

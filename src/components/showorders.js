import React from 'react';
import '../css/product.css';
export default function Showorder(props){

  return <div class='col-lg-12 icon-box' style={{padding:'10px',marginBottom:'20px',border:'2px solid green'}}>

              <div>Order ID:<b> {props._id}</b></div>
              <div>Rs.&nbsp;<b>{props.price}</b></div>

              <hr></hr>
              <div><b class='btn btn-sm btn-success'>Products:</b></div><br></br>
              <div class='show'>
              {props.cart.map(c=>
                <div style={{padding:'20px'}}>
                  <div><img src={c.imgs[0]} class='img img-rounded' height="100px" width="100px" /></div>
                  <div >
                      <b>{c.name}</b>
                      <div><b>{c.count}</b></div>
                      <p>Rs.&nbsp;<b>{c.price*c.count}</b></p>

                  </div>
                </div>

              )}
              </div>
              <hr></hr>
              <div>Paid: &nbsp; &nbsp;<b>{props.mode}</b></div>
              <div>Ordered on:&nbsp;&nbsp; <b>{props.timestamp}</b></div>
              <div>Status: <b>{props.status}</b></div>
          </div>

}

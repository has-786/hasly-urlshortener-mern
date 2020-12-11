import React from 'react';

export default function Showorder(props){

  return <div class='col-lg-3' style={{marginBottom:'50px',padding:'20px',border:'2px solid purple',borderRadius:'10px'}}>
              <div>Order ID:<b> {props._id}</b></div>
              <div>Rs.&nbsp;<b>{props.price}</b></div>
              <hr></hr>
              <div><b class='btn btn-sm btn-success'>Products:</b></div><br></br>
              {props.cart.map(c=><div class='row' style={{borderRadius:'10px',border:'2px solid red'}}>
                <div class='col-lg-6'><img src={c.imgs[0]} class='img img-rounded' height="100px" width="100px" /></div>
                        <div class='col-lg-6'>
                                        <b>{c.name}</b>
                                        <p>Rs.&nbsp;<b>{c.price}</b></p>
                          </div>
                    </div>
              )}
              <hr></hr>
              <div>Paid: &nbsp; &nbsp;<b>{props.mode}</b></div>
              <div>Ordered on:&nbsp;&nbsp; <b>{props.timestamp}</b></div>
              <div>Status: <b>{props.status}</b></div>
            </div>
}

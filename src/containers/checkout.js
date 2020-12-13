import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from  '../components/header';
import url from '../components/url';

function Checkout(props){
var s=0;

if(props.cart.length==0)props.loadCart();
props.cart.map(c=>s+=c.price*c.count);

var id=1;
if(props.order.length)id=Math.max.apply(Math, props.order.map(function(o) { return o.id; }))+1;
var user=localStorage.getItem('user');
var email=localStorage.getItem('email');
if(!user){email=user="";}
  return  <div>
  <Header len={props.cart.length}/>
  <br></br><br></br>
  <center>
     <div class='col-lg-12' style={{width:'300px',marginBottom:'20px',padding:'0px',border:'2px solid purple',borderRadius:'10px'}}>
                <div><b>{user}</b></div><br></br><br></br>
                <div><b>{email}</b></div><br></br><br></br>
                <div><p>Rs.&nbsp; <b>{s}</b></p></div><br></br><br></br>
                <button class='btn btn-success' onClick={()=>{props.placecashorder(s,props.cart,"Cash"); props.history.push('/order'); }}>Cash On Delivery</button><br></br><br></br>
                <button  class='btn btn-danger' onClick={()=>{props.placeonlineorder(s,props.cart,"Pay Online");props.history.push('/order'); }}>Pay Online</button>
                <br></br><br></br>
      </div>
    </center>

        </div>
}



const mapStateToProps=(state)=>{
  return {user:state.userReducer,cart:state.cartReducer,order:state.orderReducer}
}

const mapDispatchToProps=(dispatch)=>{
  return {

    loadCart:()=>{
      fetch(url+'loadCart',{ method:'POST',body:JSON.stringify({email:localStorage.getItem('email')}),headers:{'Content-type':'application/json'} })
      .then(response=>{ return response.json()})
      .then((body)=>{
               //alert(body.msg);
               dispatch({type:'load_cart',payload:{cart:body.cart}});
       })
      .catch(err=>alert(JSON.stringify(err)));
    },



      placecashorder:(price,cart,mode)=>{
        if(price<=1){alert("Minimum amount is Rs. 1"); return false;}

        var tempDate = new Date();
        var timestamp = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
        var payid=null,order_id=null;
        fetch(url+'addorder',{ method:'POST',body:JSON.stringify({email:localStorage.getItem('email'),price,cart,mode,payid,order_id,timestamp}),headers:{'Content-type':'application/json'} })
        .then(response=>{ return response.json()})
        .then((body)=>{
                 alert(body.msg);
                 dispatch({type:'add_order',payload:body.order})
                 dispatch({type:'clear_cart'});

         })
        .catch(err=>alert(JSON.stringify(err)));

      },


      placeonlineorder:(price,cart,mode)=>{
        const email=localStorage.getItem('email');
        const user=localStorage.getItem('user');
        if(price<=1){alert("Minimum amount is Rs. 1"); return false;}
        fetch(url+'createorder',{ method:'POST',body:JSON.stringify({email,amount:price}),headers:{'Content-type':'application/json'} })
        .then(response=>{ return response.json()})
        .then((body)=>{
                 //alert(body.msg);
                 const order_id=body.order_id;

                 var tempDate = new Date();
                 var timestamp = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
                 var payid=null;
                 let options = {
                    key: "rzp_test_XvrmRV7qpByPw8",
                    name: "Hash Paintings",
                    description: "",
                    amount:price*100,
                    order_id,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS50VEonvgI1-sTW6CHykn0U_7xk8N2_ntoTusf5VatlP7d4ukU",
                    handler: function(response) {
                                  fetch(url+'addorder',{ method:'POST',body:JSON.stringify({email:localStorage.getItem('email'),price,cart,mode,payid:response.razorpay_payment_id,order_id,timestamp}),headers:{'Content-type':'application/json'} })
                                  .then(response=>{ return response.json()})
                                  .then((body)=>{
                                    alert(body.msg);
                                       dispatch({type:'add_order',payload:body.order})
                                       dispatch({type:'clear_cart'});
                                     })
                                  .catch(err=>alert(JSON.stringify(err)));
                            },
                            prefill: {
                                    name: user,
                                    email: email
                                  },
                            notes: {
                              address: ""
                            },
                            theme: {
                              color: "blue"
                            }
      };

      let rzp = new window.Razorpay(options);
      rzp.open();

    }).catch(err=>alert(JSON.stringify(err)));

      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Checkout));

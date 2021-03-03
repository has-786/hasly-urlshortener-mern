import axios from 'axios'
import url from '../components/url'
import initialize from './initialize'

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

let secureAxios
const days=['January','February','March','April','May','June','July','August','September','October','November','December']


  export function placecashorder(price,cart,mode){
      return async function(dispatch){
        secureAxios=initialize(secureAxios)

        const dateObj = new Date();
        const day = dateObj.getUTCDate();
        const month = dateObj.getUTCMonth(); //months from 1-12
        const year = dateObj.getUTCFullYear();

        let h=dateObj.getHours();
        let m=dateObj.getMinutes();

        const time=dateObj.getTime()/1000;

        h=(parseInt(h/10)==0)?('0'+h):h;
        m=(parseInt(m/10)==0)?('0'+m):m;

        const timestamp=`${days[month]} ${day}, ${year} ${h}:${m}`

        let payid=null,order_id=null;

        const email=localStorage.getItem('email')

        const body=await secureAxios.post('addorder',{email,price,cart,mode,payid,order_id,timestamp})
        .then((response)=>{
                 const body=response.data
                 toast.success(body.msg,{autoClose:2000});
                 return body
         })
        .catch(err=>{alert(JSON.stringify(err)); return {status:0}; });

         return new Promise(function(resolve, reject) {
              if(body.status==1){
                dispatch({type:'add_order',payload:body.order})
                dispatch({type:'clear_cart'});
                resolve();
              }
              else reject()
         });

      }
    }


    export function placeonlineorder(price,cart,mode,push){
      return function(dispatch){

        secureAxios=initialize(secureAxios)
        const email=localStorage.getItem('email')
        const user=localStorage.getItem('name')


                                    return secureAxios.post('createorder',{email,amount:price})
                                    .then((response)=>{

                                             const order_id=response.data.order_id;
                                             let body;

                                             const dateObj = new Date();
                                             const day = dateObj.getUTCDate();
                                             const month = dateObj.getUTCMonth(); //months from 1-12
                                             const year = dateObj.getUTCFullYear();

                                             let h=dateObj.getHours();
                                             let m=dateObj.getMinutes();

                                             const time=dateObj.getTime()/1000;

                                             h=(parseInt(h/10)==0)?('0'+h):h;
                                             m=(parseInt(m/10)==0)?('0'+m):m;

                                             const timestamp=`${days[month]} ${day}, ${year} ${h}:${m}`

                                             var payid=null;
                                             let options = {
                                                key: "rzp_test_XvrmRV7qpByPw8",
                                                name: "Hash Paintings",
                                                description: "",
                                                amount:price*100,
                                                order_id,
                                                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS50VEonvgI1-sTW6CHykn0U_7xk8N2_ntoTusf5VatlP7d4ukU",
                                                handler: function(response) {
                                                             secureAxios.post('addorder',{email,price,cart,mode,payid:response.razorpay_payment_id,order_id,timestamp})
                                                              .then((response)=>{
                                                                       body=response.data
                                                                       toast.success(body.msg,{autoClose:2000});
                                                                       if(body.status==1){
                                                                         dispatch({type:'add_order',payload:body.order})
                                                                         dispatch({type:'clear_cart'});
                                                                          push('/order')
                                                                       }
                                                              })
                                                              .catch(err=>push('/signin'));

                                                        },
                                                        prefill: {
                                                                name: user,
                                                                email: email
                                                              },
                                                        notes: {
                                                          address: ""
                                                        },
                                                        theme: {
                                                          color: "green"
                                                        }
                                  };

                                  let rzp = new window.Razorpay(options);
                                  rzp.open();

                                })
                                .catch(err=>push('/signin'));


            }
      }

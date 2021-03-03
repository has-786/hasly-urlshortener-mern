import React,{useState} from 'react';
import Showproduct from '../components/showproducts';
import Header from './header';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import url from '../components/url';

 function Disk(props){

   const [flag,setFlag]=useState(0);
   if(props.product.length==0 && !flag)
   {
      setFlag(1);
      props.loadProducts('disk');
      props.loadCart();
   }

    //alert(JSON.stringify(props.cart));
   props.product.map(p=>{
    var obj=props.cart.find(c=>c._id==p._id);
     if(obj)p.count=obj.count;
     else p.count=0;
   });

   var [search,setSearch]=useState('');
   search=search.trim().toLowerCase();
   var arr=[];
   if(search=='')arr=props.product;
   else arr=props.product.filter(c=>c.name.toLowerCase().includes(search));



  return <div >
              <Header len={props.cart.length}/>
              <h3 style={{backgroundColor:'green',marginTop:'0px',padding:'15px'}}>
              <span style={{color:'white'}}>Buy DVDs</span>
              <input type="text" placeholder="Search DVDs" name="search" style={{fontSize:'18px',float:'right'}} value={search} onChange={(evt)=>setSearch(evt.target.value)}  />
              </h3>
              <br></br>  <br></br>  <br></br>

              {arr.map(p=>
                <div>
                <Showproduct {...p} inccartproduct={props.inccartproduct} deccartproduct={props.deccartproduct} removecartproduct={props.removecartproduct}/>
                </div>
              )}
        </div>
}



const mapStateToProps=(state)=>{
  return {product:state.prodReducer.filter(p=>p.type=='disk'),cart:state.cartReducer}
}
const mapDispatchToProps=(dispatch)=>{
  return {
      loadProducts:(type)=>{
        fetch(url+'loadImg',{ method:'POST',body:JSON.stringify({type}),headers:{'Content-type':'application/json'} })
        .then(response=>{ return response.json()})
        .then((body)=>{
                 //alert(body.msg);
                 dispatch({type:'load_prod',payload:{products:body.products}});
         })
        .catch(err=>alert(JSON.stringify(err)));
      },

      loadCart:()=>{
        fetch(url+'loadCart',{ method:'POST',body:JSON.stringify({email:localStorage.getItem('email')}),headers:{'Content-type':'application/json'} })
        .then(response=>{ return response.json()})
        .then((body)=>{
                 //alert(body.msg);
                 dispatch({type:'load_cart',payload:{cart:body.cart}});
         })
        .catch(err=>alert(JSON.stringify(err)));
      },

      inccartproduct:(id,name,desc,price,imgs,count)=>{
        const email=localStorage.getItem('email');
        if(!email){alert('Please login first'); return false; }
        //alert(JSON.stringify({email,id,name,desc,price,imgs,count}));
        fetch(url+'inccartproduct',{ method:'POST',body:JSON.stringify({email,id,name,desc,price,imgs,count}),headers:{'Content-type':'application/json'}})
        .then(response=>{ return response.json()})
        .then((body)=>{
                 dispatch({type:'inc_cart_product',payload:{email,_id:id,name,desc,price,imgs,count}})
         })
        .catch(err=>alert(JSON.stringify(err)));


      },
      deccartproduct:(id,count)=>{
        if(count<=1)return;
        const email=localStorage.getItem('email');
        if(!email){alert('Please login first'); return false; }
        //alert(JSON.stringify({email,id,name,desc,price,imgs,count}));
        fetch(url+'deccartproduct',{ method:'POST',body:JSON.stringify({email,id}),headers:{'Content-type':'application/json'}})
        .then(response=>{ return response.json()})
        .then((body)=>{
                 dispatch({type:'dec_cart_product',payload:{id,count}})
         })
        .catch(err=>alert(JSON.stringify(err)));
      },


      removecartproduct:(id)=>{
        const email=localStorage.getItem('email');
        if(!email){alert('Please login first'); return false; }
        //alert(JSON.stringify({email,id,name,desc,price,imgs,count}));
        fetch(url+'removecartproduct',{ method:'POST',body:JSON.stringify({email,id}),headers:{'Content-type':'application/json'}})
        .then(response=>{ return response.json()})
        .then((body)=>{
                 dispatch({type:'remove_cart_product',payload:{id}})
         })
        .catch(err=>alert(JSON.stringify(err)));
      }

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Disk);

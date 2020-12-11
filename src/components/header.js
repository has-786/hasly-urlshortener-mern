import {Link,withRouter} from 'react-router-dom';
import React from 'react';

import '../css/header.css';

class  Header extends React.Component{

constructor(props){super(props); this.state={user:""}}


  myFunction(){
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav")x.className += " responsive";
      else x.className = "topnav";
  }




  login(){
    const x=document.getElementById('login').innerHTML;
      if(x==='Login'){ this.props.history.push('/login');   }
      else {
        document.getElementById('login').innerHTML='Login';
          localStorage.removeItem('user');
          localStorage.removeItem('email');
          this.setState({user:""});
          document.getElementById('user').style.display='None';

        }
  }


componentDidMount(){
  const user=localStorage.getItem('user');
  if(user){ this.setState({user}); document.getElementById('login').innerHTML='Logout';
  document.getElementById('user').style.display='block';
  }
  else {document.getElementById('login').innerHTML='Login';
  document.getElementById('user').style.display='None';

  }

}

render(){

  return <div class="topnav" id="myTopnav">
    <Link to='/' >Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/order'>My Orders</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/cart'>My Cart<p class='label label-success'>{this.props.len}</p>&nbsp;</Link>
      <Link to='/addproduct' style={{display:'None'}}>Add Product</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link id='login' onClick={this.login.bind(this)}>Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link  id='user' class='btn btn-sm btn-primary' >{this.state.user}</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <a  href="javascript:void(0);" class="icon" onClick={this.myFunction.bind(this)}>
      <i class="fa fa-bars"></i>
    </a>
  </div>
  }


}
export default withRouter(Header);

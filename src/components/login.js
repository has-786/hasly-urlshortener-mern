import React ,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import url from '../components/url';
import Header from '../components/header';

class Login extends Component{
	constructor(props){super(props);}

	fun=(event)=>{
		event.preventDefault();
		if(document.getElementById('1').value.length==0 || document.getElementById('2').value.length==0 ){alert('Please Fill The Required Places'); return false;}

		var data={email:document.getElementById('1').value,pass:document.getElementById('2').value };
		fetch(url+'localSignin',{ method:'POST',body:JSON.stringify(data),headers: {"Content-Type": "application/json" } }).then((response)=>{
		return response.json()}).then((body)=>{
      var name=null,email=null;
      if(body.status==1){name=body.name;email=body.email;}
      alert(body.msg);
      localStorage.setItem('user',name);
      localStorage.setItem('email',email);

      this.props.history.push('/');
		}).catch(err=>console.log(err));
}

render()
{
 return (
 <div>
      <Header len={"0"}/>
 			<center><h2 style={{padding:"10px"}}>Login</h2></center>
			     <br></br><br></br>
			<center>

    <div id='contain'  style={{width:"300px",backgroundColor:"pink",border:"10px solid green",borderRadius:"30px",padding:"20px"}}>
	<br></br><br></br>
				<div><input type = "text" name = "name" id='1' placeholder="Enter your email" required/></div><br></br><br></br>
				<div><input type = "password" name = "pass" id='2'  placeholder="Ener password" required/></div><br></br>
				<div><button name = "signup-button" onClick={this.fun.bind(this)} class='btn btn-primary' value = "sign in">Login</button></div><br></br><br></br><br></br>

				<div><a href='/signup'><button class='btn btn-warning'>Don't have an account?</button></a></div><br></br><br></br><br></br>
				<div><a href='/'><button class='btn btn-success'>Back to Home</button></a></div><br></br>

	</div>
</center>
		</div>


)}

}


//export default connect(mapStateToProps, mapDispatchToProps)(App);

export default withRouter(Login);

import React ,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import url from '../components/url';
import Header from '../components/header';


class Signup extends Component{

	constructor(props){super(props);}

	register=(event)=>{
		event.preventDefault();
    const otp=localStorage.getItem('otp');
    if(document.getElementById('3').value!=otp){alert('Incorrect OTP'); return false;}

		if(document.getElementById('1').value.length==0 || document.getElementById('2').value.length==0  || document.getElementById('3').value.length==0
    || document.getElementById('4').value.length==0 ){alert('Please Fill The Required Places'); return false;}

		var data={name:document.getElementById('4').value,email:document.getElementById('1').value,pass:document.getElementById('2').value };
		fetch(url+'localSignup',{ method:'POST',body:JSON.stringify(data),headers: {"Content-Type": "application/json" } }).then((response)=>{
		return response.json()}).then((body)=>{
      var email=null,name=null;
      if(body.status==1){email=body.email;name=body.name;}
      alert(body.msg);
      localStorage.setItem('name',name);
      localStorage.setItem('email',email);

      localStorage.removeItem('otp');
      this.props.history.push('/');

		}).catch(err=>console.log(err));
}



	verify=(event)=>{
		event.preventDefault();
		if(document.getElementById('1').value.length==0 ){alert('Please Fill The Required Place'); return false;}

		var data={email:document.getElementById('1').value};
		fetch(url+'emailverify',{ method:'POST',body:JSON.stringify(data),headers: {"Content-Type": "application/json" } }).then((response)=>{
		return response.json()}).then((body)=>{
      var otp=null;
      if(body.status==1)otp=body.otp;
       alert(body.msg);
       localStorage.setItem('otp',otp);
		}).catch(err=>console.log(err));
}

render()
{
 return (
 <div>
      <Header len={"0"}/>
 			<center><h2 style={{padding:"10px"}}>Sign up</h2></center>
			<center>

    <div id='contain'  style={{width:"300px",backgroundColor:"pink",border:"10px solid green",borderRadius:"30px",padding:"20px"}}>
	<br></br>
				<div><input type = "text" name = "name" id='1' placeholder="Enter your email" required/></div><br></br>
        <button onClick={this.verify.bind(this)} class='btn btn-danger'>Send OTP</button>
<br></br><br></br>

        <div ><input type = "text" name = "user" id='4' placeholder="Enter your name" required/></div><br></br>
				<div><input type = "number" name = "otp" id='3'  placeholder="Enter OTP" required/></div><br></br>
        <div><input type = "password" name = "pass" id='2'  placeholder="Ener password" required/></div><br></br>

				<div ><button name = "signup-button" onClick={this.register.bind(this)} class='btn btn-primary' value = "sign in">Sign up</button></div><br></br><br></br><br></br>

				<div><a href='/login'><button class='btn btn-warning'>Already have an account?</button></a></div><br></br><br></br><br></br>
				<div><a href='/'><button class='btn btn-success'>Back to Home</button></a></div><br></br>

	</div>
</center>
		</div>


)}

}


//export default connect(mapStateToProps, mapDispatchToProps)(App);

export default withRouter(Signup);

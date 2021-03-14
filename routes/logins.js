const checkAuth = require('../check-auth');

module.exports=(app,user)=>{

	const bcrypt=require('bcrypt')
	const jwt=require('jsonwebtoken')

    app.post('/localSignup',(req,res)=>{

	const email=req.body.email;
	const name=req.body.name;
	const pass=req.body.pass;
    
    console.log(req.body)
	console.log("User registered: "+name);
	// store to database

	user.findOne({email},(err,user1)=>{
	    if(err)console.log(err);
	    else if(user1){ console.log('Already A User');console.log(user1); res.send({msg:"Already Registered",status:0}); }
		else{
			    bcrypt.hash(pass,12,(err,hash)=>{

                    const Newuser=new user({name:name,email:email,pass:hash});
						Newuser.save((err,user2)=>{ if(err){console.log(err); res.send({msg:"Someting Went Wrong",status:0}); }
						                            else {console.log(user2);
                                          const token=jwt.sign({_id:user2._id,email:email},'access_token_secret',{
                                            expiresIn:'1h'
                                          })
                                          console.log('token '+token);

                                          res.send({token:token,name:user2.name,email:user2.email,msg:"Successfully Registered",status:1}); }
						});
				});
			}
	});
  });


  app.post('/localSignin',(req,res,next)=>{
	email=req.body.email;
	pass=req.body.pass;

	 user.findOne({email})
    .then(function(user1) {
		if(user1){ return bcrypt.compare(pass,user1.pass); }
    })
    .then(function(samePassword) {
         console.log(samePassword);
		 if(samePassword==true){
				user.findOne({email:email},(err,user2)=>{
				    console.log(user2);
                    const token=jwt.sign({_id:user2._id,email:email},'access_token_secret',{
                        expiresIn:'1h'
                    })

                    console.log('token '+token);
                    res.send({token,name:user2.name,email:user2.email,msg:"Logged in successfully",status:1});  
                });
		 }
		 else res.send({name:"Wrong Credentials",status:0});
     })
    .catch(function(error){
        console.log("Error authenticating user: ");
		res.send({name:"Something Went Wrong",status:0});
        console.log(error);
        next();
    });
});


app.post('/forgotPassword',(req,res)=>{
	const email=req.body.email;
	console.log(email,appMail);
	const pat=email.substring(email.lastIndexOf('.'));
	console.log(pat);
    if(pat!='.com' && pat!='.co.in' && pat!='.in'){ res.send({status:0,msg:"Email Id not correct"}); }
	else{
		user.findOne({email:email},(err,user1)=>{
	    if(err)res.send({status:0,msg:"Something went wrong"});
		else if(!user1)res.send({status:0,msg:"User not registered"});
		else{
					 const otp=Math.floor(Math.random()*(9999-1000)+1000);
					 const transporter = nodemailer.createTransport({service:'Gmail',secure: false,auth: {user:appMail,pass:appMailPassword},tls: {
	                    rejectUnauthorized: false
	                 }});
					 const mailOptions = {from: appMail, to: email, subject: 'Socio We OTP for forgot password', text:'Your otp is '+otp};
					 transporter.sendMail(mailOptions, function (err, info) { if(err){res.send({status:0,msg:"Email Id not correct"}); console.log(err);}else {  console.log(info);  res.send({status:1,msg:'An OTP is sent to this email id',otp:otp}); }});
            }
	   });
	}
});



app.post('/changePassword',(req,res)=>{

	const email=req.body.email;
	const password=req.body.password;
	console.log(password)
	// store to database
		bcrypt.hash(password,12,(err,hash)=>{
					console.log(hash)

					user.updateOne({email},{pass:hash})
					.then(update=>{
						if(!update)res.send({status:0})
						else res.send({status:1})
					})
					.catch(err=>{console.log(err); res.send({status:0})})
			});
	});


	app.get('/isloggedin',checkAuth,(req,res)=>{
		res.send({status:1})
	})


}
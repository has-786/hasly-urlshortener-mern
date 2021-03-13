const express=require('express');
app=express();

const jwt=require('jsonwebtoken');
const nodemailer=require('nodemailer');
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const {multer,storage}=require('./multer.js');
const db=require('./database/db');
const checkAuth=require('./check-auth.js');
db.con(mongoose);
user=db.user;
product=db.product;
cart=db.cart;
order=db.order;
video=db.video;


const appMail="shiabudget@gmail.com";
const appMailPassword='YAali@786';

app=express();
app.use('/hashuploads',express.static(path.join(__dirname,'/hashuploads')));
app.use(bodyParser.json())

app.use(cors());


app.post('/insertImg',checkAuth,multer({storage}).array('imgs'),function(req, res) {
  //console.log(req.files);
  var paths=[];
  files=req.files;
  name=req.body.name;
  desc=req.body.desc;
  price=req.body.price;
  type=req.body.type;

  files.map(f=>{ paths.push(f.filename);  })

  var newProduct=new product({name,desc,price,imgs:paths,type});
  newProduct.save((err,product1)=>{ if(err){console.log(err); res.send({name:"Someting Went Wrong",status:0}); }
                              else {console.log(product1); res.send({product:product1,msg:"Successfully uploaded",status:1}); }
  });
});


app.post('/insertVideo',checkAuth,function(req, res) {
  console.log(req.body);
  name=req.body.name;
  tags=req.body.tags;
  link=req.body.link;

  var newVideo=new video({name,tags,link});
  newVideo.save((err,video1)=>{ if(err){console.log(err); res.send({name:"Someting Went Wrong",status:0}); }
                              else {console.log(video1); res.send({video:video1,msg:"Successfully uploaded",status:1}); }
  });
});


app.post('/loadImg',(req,res)=>{
    product.find({type:req.body.type},(err,product1)=>{if(err) res.send({msg:"Someting Went Wrong",status:0});
        else {res.send({products:product1,msg:"Successfully Loaded",status:1}); }
      });
});


app.get('/loadVideo',(req,res)=>{
    video.find({},(err,video1)=>{if(err) res.send({msg:"Someting Went Wrong",status:0});
        else {res.send({video:video1,msg:"Successfully Loaded",status:1}); }
      });
});

app.post('/deleteProduct',checkAuth,(req,res)=>{
    product.deleteOne({_id:req.body.id},(err,product1)=>{if(err || !product1) res.send({msg:"Someting Went Wrong",status:0});
        else if(product1){
          res.send({msg:"Successfully Deleted",status:1}); }
      });
});

app.post('/deleteVideo',checkAuth,(req,res)=>{
    video.deleteOne({_id:req.body.id},(err,video1)=>{if(err || !video1) res.send({msg:"Someting Went Wrong",status:0});
        else if(video1){
          res.send({msg:"Successfully Deleted",status:1}); }
      });
});


app.get('/loadCart',checkAuth,(req,res)=>{
    const email=req.userData.email

    cart.findOne({email},(err,cart1)=>{if(err) res.send({msg:"Someting Went Wrong",status:0});
    else if(!cart1){res.send({cart:[],msg:"Successfully Loaded",status:1}); }
    else {console.log(cart1); res.send({cart:cart1.cart,msg:"Successfully Loaded",status:1}); }
      });
});

app.get('/loadOrder',checkAuth,(req,res)=>{
     order.find({email:req.userData.email},(err,order1)=>{
        if(err) res.send({msg:"Someting Went Wrong",status:0});
        else {console.log(order1); res.send({order:order1,msg:"Successfully Loaded",status:1}); }
      });
});

app.post('/addorder',checkAuth,(req,res)=>{

    email=req.body.email;
    cart1=req.body.cart;
    price=req.body.price;
    mode=req.body.mode;
    payid=req.body.payid;
    order_id=req.body.order_id;

    timestamp=req.body.timestamp;

    var newOrder=new order({email,cart:cart1,price,mode,payid,order_id,timestamp});
    newOrder.save((err,order1)=>{ if(err || !order1){console.log(err); res.send({name:"Someting Went Wrong",status:0}); }
                                  else {
                                                      console.log(order1);
                                                      cart.updateOne({email},{cart:[]},(err,cart1)=>{

                                                    if(err || !cart1){ console.log(err); res.send({name:"Someting Went Wrong",status:0}); }
                                                    else res.send({order:order1,msg:"Order successfully placed",status:1});

                                                  });
                                      }
                        });
});


app.post('/removecartproduct',checkAuth,(req,res)=>{

    cart.findOne({email},(err,cart1)=>{
      if(err) res.send({msg:"Someting Went Wrong",status:0});
      else {
          console.log(cart1);
            var arr=cart1.cart;
            arr=arr.filter(a=>a._id!=req.body.id);
            cart.updateOne({email:req.body.email},{cart:arr},(err,cart1)=>{
              if(err) res.send({msg:"Someting Went Wrong",status:0});
              else res.send({msg:"Removed",status:1});
           });
         }
      });
});



app.post('/deccartproduct',checkAuth,(req,res)=>{
    const email=req.userData.email

    cart.findOne({email},(err,cart1)=>{
      if(err) res.send({msg:"Someting Went Wrong",status:0});
      else {
          console.log(cart1);
            var arr=cart1.cart;
            arr.map(a=>{if(a._id==req.body.id)a.count--; });
            cart.updateOne({email:req.body.email},{cart:arr},(err,cart1)=>{
              if(err) res.send({msg:"Someting Went Wrong",status:0});
              res.send({msg:"Decremented",status:1});
           });
         }
      });
});


app.post('/inccartproduct',checkAuth,(req,res)=>{

  email=req.body.email;
  id=req.body.id;
  name=req.body.name;
  desc=req.body.desc;
  price=req.body.price;
  imgs=req.body.imgs;
  count=req.body.count;
  console.log(req.body.email);

    cart.findOne({email},(err,cart1)=>{
        if(err) res.send({msg:"Someting Went Wrong",status:0});
        else if(!cart1){
                const newCart=new cart({email,cart:[{_id:id,name:name,desc:desc,price:price,imgs:imgs,count:1}]});
                newCart.save((err,cart1)=>{
                  if(err) res.send({msg:"Someting Went Wrong",status:0});
                  else res.send({msg:"Incremented",status:1});
                });
         }
        else {
                console.log(cart1);
                var arr=cart1.cart;
                var obj=arr.find(a=>a._id==id);
                if(obj)arr.map(a=>{if(a._id==id)a.count++;});
                else
                   arr.push({_id:id,name,desc,price,imgs,count:1});
                   cart.updateOne({email},{cart:arr},(err,cart2)=>{
                        if(err) res.send({msg:"Someting Went Wrong",status:0});
                        else  res.send({msg:"Incremented",status:1});
                   });
         }
      });
});


app.post('/emailverify',(req,res)=>{
	const email=req.body.email;
	console.log(email,appMail);
	var pat=email.substring(email.lastIndexOf('.'));
	console.log(pat);
    if(pat!='.com' && pat!='.co.in' && pat!='.in'){ res.send({status:0,msg:"Email Id not correct"}); }
	else{
		user.findOne({email:email},(err,user1)=>{
	    if(err)res.send({status:0,msg:"Something went wrong"});
		else if(user1)res.send({status:0,msg:"Email Already Registered"});
		else{
				const otp=Math.floor(Math.random()*(9999-1000)+1000);
				var transporter = nodemailer.createTransport({service:'Gmail',auth: {user:appMail,pass:'YAali@786'}});
				const mailOptions = {from: appMail, to: email, subject: 'Shia Budget Email Verification OTP', text:'Your otp is '+otp};
				transporter.sendMail(mailOptions, function (err, info) { if(err){res.send({status:0,msg:"Email Id not correct"}); console.log(err);}else {  console.log(info);  res.send({status:1,msg:'An OTP is sent to this email id',otp:otp}); }});

	     	}
	   });
	}
});

app.post('/emailverifyforgotpassword',(req,res)=>{
	const email=req.body.email;
	var pat=email.substring(email.lastIndexOf('.'));
	console.log(pat);
    if(pat!='.com' && pat!='.co.in' && pat!='.in'){ res.send({status:0,msg:"Email Id not correct"}); }
	else{
		user.findOne({email:email},(err,user1)=>{
	    if(err)res.send({status:0,msg:"Something went wrong"});
		else if(!user1)res.send({status:0,msg:"Email not registered"});
		else{
				const otp=Math.floor(Math.random()*(9999-1000)+1000);
				var transporter = nodemailer.createTransport({service:'Gmail',auth: {user:appMail,pass:'YAali@786'}});
							const mailOptions = {from: appMail, to: email, subject: 'Shia Budget Email Verification OTP', text:'Your otp is '+otp};
							transporter.sendMail(mailOptions, function (err, info) { if(err) console.log(err);else {  console.log(info);  res.send({otp1:otp,status:1}); }
																				});
	     	}
	  });
	}
});


app.post('/updatepassword',(req,res)=>{
	email=req.body.email;
	pass=req.body.pass;

	user.findOne({email:email},(err,user1)=>{
	    if(err)console.log(err);
	    else if(!user1){ console.log('Already A User');console.log(user1); res.send({msg:"Email not registered",status:0}); }
		else{
			    bcrypt.hash(pass,12,(err,hash)=>{

						user.updateOne({email:email},{pass:hash},(err,user2)=>{ if(err){console.log(err); res.send({msg:"Someting Went Wrong",status:0}); }
						                            else {console.log(user2); res.send({msg:"Password successfully updated",status:1}); }
						});
				});

			}
	});

});



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
            //const token
						var Newuser=new user({name:name,email:email,pass:hash});
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
					res.send({token,name:user2.name,email:user2.email,msg:"Logged in successfully",status:1});  });
		 }
		 else res.send({name:"Wrong Credentials",status:0});
     })
    .catch(function(error){
        console.log("Error authenticating user: ");
		res.send({name:"Something Went Wrong",status:0});
        console.log(error);
        next();
    });
}  );


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


  app.get('/uploads/:img/:token',(req,res)=>{
    try {
        const token = req.params.token
        const decoded = jwt.verify(token, 'access_token_secret');
    } catch (error) {
        return res.status(401).json({
            msg: 'You are not authorized!!!'
        });
    }
        res.download('./uploads/'+req.params.img)
  })

app.post('/createorder',checkAuth,(req,res)=>{

const Razorpay = require('razorpay');
const instance = new Razorpay({
  key_id:"rzp_test_XvrmRV7qpByPw8",
  key_secret: "jLX00p3AQUJks2SXwtUqtHac",
});
var options = {
  amount: req.body.amount*100,  // amount in the smallest currency unit
  currency: "INR",
  receipt: "order_rcptid_11"
};
instance.orders.create(options, function(err, order) {
  console.log(order);
  if(!order){res.send({order_id:'fafa'});}
  res.send({order_id:order.id});
});

})
/*
const tf = require('@tensorflow/tfjs');
const mobilenet = require('@tensorflow-models/mobilenet');
const tfnode = require('@tensorflow/tfjs-node');
const fs = require('fs');

const readImage = path => {
  const imageBuffer = fs.readFileSync(path);
  const tfimage = tfnode.node.decodeImage(imageBuffer);
  return tfimage;
}

const imageClassification = async path => {
  const image = readImage(path);
  const mobilenetModel = await mobilenet.load();
  const predictions = await mobilenetModel.classify(image);
  console.log('Classification Results:', predictions);
}

imageClassification('C:\Users\SYED MD HASNAIN JAH\Pictures\african_parrot.jpg')
*/


app.listen(5000,()=>{console.log('server on')})

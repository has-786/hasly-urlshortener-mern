
module.exports=(express,Url,checkAuth)=>{

    const myurlsRoute = express.Router();

    myurlsRoute.get("/myurls",checkAuth,(req, res)=>{
       const email=req.userData.email
        Url.find({email})
        .then(myurls=>{
            if(myurls)res.send({myurls,status:1})
            else res.send({status:0})
        })
       .catch(err=>res.send({status:0}))
    });
    
    return myurlsRoute;
}


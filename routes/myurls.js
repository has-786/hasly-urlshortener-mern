
module.exports=(router,Url,checkAuth)=>{


    router.get("/api/myurls",checkAuth,(req, res)=>{
       const email=req.userData.email
        Url.find({email})
        .then(myurls=>{
            if(myurls)res.send({myurls,status:1})
            else res.send({status:0})
        })
       .catch(err=>res.send({status:0}))
    });
    
}


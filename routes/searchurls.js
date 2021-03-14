module.exports=(router,Url)=>{


    router.post('/searchUrls',(req,res)=>{
        console.log(req.body)
        const searchstring=req.body.searchstring
        console.log(searchstring)
        if(searchstring==='')res.send({urls:[],status:1})
        else{
        Url.find({$or:[{longUrl:{$regex:`.*${searchstring.toLowerCase()}.*`,$options:'i'}},{shortUrl:{$regex:`.*${searchstring.toLowerCase()}.*`,$options:'i'}},
        {name:{$regex:`.*${searchstring.toLowerCase()}.*`,$options:'i'}}]})
        .then(urls=>{console.log(urls); res.send({urls,status:1});})
        .catch(err=>res.send({status:0}) )
        }
    })


}
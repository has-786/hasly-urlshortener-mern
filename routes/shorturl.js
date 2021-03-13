module.exports=(app,shortid,validUrl,Url)=>{


    app.get("/set", async (req, res)=>{
    
       const baseUrl='https://hasly.herokuapp.com'
       const longUrl = req.query.url;
       const email = req.query.email;
       const name = req.query.name;

       console.log(longUrl)
    
        if(!longUrl)return res.status(400).send({status:0,msg:"Please enter correct url"})
        if(!validUrl.isUri(baseUrl))return res.status(401).send({status:0,msg:"Internal error. Please come back later."})
    
        const urlCode = shortid.generate()
        if(validUrl.isUri(longUrl)){
    
            try{
                let url = await Url.findOne({longUrl})
                if(url)return  res.status(200).send({status:1,url})
                else
                {
                    const shortUrl = baseUrl + "/g?url=" + urlCode
                    url  = new Url({name,email,longUrl,shortUrl,urlCode,clickCount: 0})
                    await url.save()
                    return res.status(201).json({status:1,url})
                }
            }
            catch(err){
                console.error(err.message)
                return res.status(500).send({status:0,msg:"Internal Server error " + err.message})
            }
        }
        else res.status(400).send({status:0,msg:"Invalid URL. Please enter a valid url for shortening."})  
    });
    
}


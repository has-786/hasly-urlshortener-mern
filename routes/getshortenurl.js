module.exports=(app,shortid,validUrl,Url)=>{

    app.get('/g', async (req, res) => {
        
        const shortUrlCode = req.query.url;
        if(!shortUrlCode)return res.status(400).send("Please enter correct url")

        const url = await Url.findOne({ urlCode: shortUrlCode });
        try {
            if (url) {
                let clickCount = url.clickCount;
                clickCount++;
                await url.update({ clickCount });
                return res.redirect(url.longUrl);
            }
            else return res.status(400).send("The short url doesn't exists in our system.");
        }
        catch (err) {
            console.error("Error while retrieving long url for shorturlcode " + shortUrlCode);
            return res.status(500).send("There is some internal error.");
        }
    })


}
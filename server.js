const express = require("express");
const mongoose=require('mongoose')
const db = require("./database/db");
const shortid = require("shortid");
const validUrl = require("valid-url");
const checkAuth = require("./check-auth");
const cors=require('cors');
const path=require('path')
const app = express();
app.use(express.json());

const router=express.Router()
require("./routes/shorturl")(router,shortid,validUrl,db.urls)
require("./routes/getshortenurl")(router,shortid,validUrl,db.urls)
require("./routes/myurls")(router,db.urls,checkAuth)
require("./routes/searchurls")(router,db.urls)
require("./routes/logins")(router,db.user)

db.con(mongoose)

app.use(cors())


app.use("/",router)
app.use("/myurls", router);
app.use("/addurls", router);

const routes=['/','/addurls','/myurls','/signin','/signup','/changePassword']

routes.map(r=>{
        
    app.use(r,express.static(path.join(__dirname, 'client','build')))
    app.get(r,(req,res)=>{res.sendFile(path.join(__dirname,'client','build','index.html'));})

})
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log("Server is listening on port " + PORT));

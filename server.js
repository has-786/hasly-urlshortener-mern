const express = require("express");
const mongoose=require('mongoose')
const db = require("./database/db");
const shortid = require("shortid");
const validUrl = require("valid-url");
const checkAuth = require("./check-auth");
const cors=require('cors');
const path=require('path')
const app = express();
app.use(express.json({}));


require("./routes/shorturl")(app,shortid,validUrl,db.urls)
require("./routes/getshortenurl")(app,shortid,validUrl,db.urls)
require("./routes/myurls")(app,db.urls,checkAuth)
require("./routes/searchurls")(app,db.urls)
require("./routes/logins")(app,db.user)

db.con(mongoose)

app.use(cors())

/*
app.use("/",getShortenUrlRoute)
app.use("/set", shortUrlRoute);
app.use("/", myUrlsRoute);
app.use("/", searchRoute);
app.use("/", loginRoute);*/
app.use('/',express.static(path.join(__dirname, 'client','build')))
app.get('/',(req,res)=>{res.sendFile(path.join(__dirname,'client','build','index.html'));})

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log("Server is listening on port " + PORT));

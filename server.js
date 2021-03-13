const express = require("express");
const mongoose=require('mongoose')
const db = require("./database/db");
const shortid = require("shortid");
const validUrl = require("valid-url");
const checkAuth = require("./check-auth");
const cors=require('cors');
const shortUrlRoute = require("./routes/shorturl")(express,shortid,validUrl,db.urls)
const getShortenUrlRoute = require("./routes/getshortenurl")(express,shortid,validUrl,db.urls)
const myUrlsRoute = require("./routes/myurls")(express,db.urls,checkAuth)
const searchRoute = require("./routes/searchurls")(express,db.urls)
const loginRoute = require("./routes/logins")(express,db.user)

db.con(mongoose)

const app = express();
app.use(cors())
app.use(express.json({}));

app.use("/",getShortenUrlRoute)
app.use("/set", shortUrlRoute);
app.use("/", myUrlsRoute);
app.use("/", searchRoute);
app.use("/", loginRoute);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Server is listening on port " + PORT));

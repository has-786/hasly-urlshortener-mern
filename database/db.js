const mongoose=require('mongoose');

function con(mongoose){
    mongoose.connect('mongodb+srv://react:react@cluster0.vvcms.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', ()=>{    console.log('Database is connected'); });
}

var userSchema=new mongoose.Schema({name:String,email:String,pass:String});
var user=mongoose.model('user',userSchema);

const urlSchema = new mongoose.Schema({urlCode: String,longUrl: String,shortUrl: String,clickCount: Number,email:String,name:String});
const urls=mongoose.model('urls',urlSchema)

module.exports={con,urls,user};

const mongoose=require('mongoose');
function con(mongoose){

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database is connected');
});
}

const integer={type:Number, validate : {validator : Number.isInteger}};

var userSchema=new mongoose.Schema({name:String,email:String,pass:String});
var user=mongoose.model('user',userSchema);

var productSchema=new mongoose.Schema({name:String,desc:String,price:String,imgs:[String],type:String});
var product=mongoose.model('product',productSchema);

var cartSchema=new mongoose.Schema({email:String,cart:{type:Array,default:[]}});
var cart=mongoose.model('cart',cartSchema);

var orderSchema=new mongoose.Schema({email:String,cart:{type:Array,default:[]},price:Number,mode:String,payid:{type:String,default:null},order_id:{type:String,default:null},status:{type:'String',default:'Yet to be dispatched'},timestamp:String})
var order=mongoose.model('order',orderSchema);

var videoSchema=new mongoose.Schema({name:String,tags:String,link:String});
var video=mongoose.model('video',videoSchema);

module.exports={con,user,product,cart,order,video};

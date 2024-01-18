const mongoose=require('mongoose')

const tweetScema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String
    }
},{timestamps:true})

const Tweet=mongoose.model('Tweet',tweetScema);
module.exports=Tweet;
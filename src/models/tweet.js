const mongoose=require('mongoose')

const tweetScema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String
    }//onetweet has multiple comments
    ,
    comments:[{
        content:{
            type:String,
            required:true
        }
    }
],
},{timestamps:true})

const Tweet=mongoose.model('Tweet',tweetScema);
module.exports=Tweet;
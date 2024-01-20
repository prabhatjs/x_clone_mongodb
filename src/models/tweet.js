const mongoose=require('mongoose')

const tweetScema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String
    }//onetweet has multiple comments
    ,//how to refrence comments model here associate multiple collection
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }],
},{timestamps:true})

const Tweet=mongoose.model('Tweet',tweetScema);
module.exports=Tweet;
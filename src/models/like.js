const mongoose=require('mongoose')

const likeScema=new mongoose.Schema({
    //one which model we like -comment or tweet
    onModel:{
        type:String,
        required:true,
        enum:['Tweet','Comment']
    },
    //on which tweet ,commet like if enum is tweet tweetid is store in likeable,in case comment is same store comment id
    likeable:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true,
    }
},{timestamps:true})
    

const Like=mongoose.model('Like',likeScema);
module.exports=Like;
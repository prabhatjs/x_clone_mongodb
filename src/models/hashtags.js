const mongoose=require('mongoose');

const hashTagsSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    //one hasthag multiple tweets,ek hashtak kai sare tweet eme laga ho sakta hai,tweet id store in hashtag model
    tweets:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tweet'
    }],
                                                                                                                                                                                                                 
});

const Hashtag=mongoose.model('Hashtag',hashTagsSchema);
module.exports=Hashtag;
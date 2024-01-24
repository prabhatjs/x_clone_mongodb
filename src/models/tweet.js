const mongoose=require('mongoose')

const tweetScema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[300,'Tweet cannot be more the 300 characters']
    },
    hashtags:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hashtag'
    }],
},{timestamps:true});

// tweetScema.virtual("userInfowithtweet").get(function process(){
//     return `${this.content}\n${this.userEmail}`;
// });
// //trigger
// tweetScema.pre('save',function (next){
//     this.content=this.content+'add with trigger'
//     console.log("Hello Trigger");
//     next();
// })

const Tweet=mongoose.model('Tweet',tweetScema);
module.exports=Tweet;
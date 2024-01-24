const Tweet=require('../models/tweet');

async function create(data){
   try {
    const returnTweet= await Tweet.create(data);
    return returnTweet;
   } catch (error) {
    console.log(error);
   }
}

async function get(id){
    try {
        const returnTweet=await Tweet.findById(id);
        return returnTweet;
    } catch (error) {
        console.log(error);
    }

}

async function update(id,data){
    try {
        const returnTweet=await Tweet.findByIdAndUpdate(id,data);
        return returnTweet;
    } catch (error) {
        console.log(error);
    }
}

async function destory(id){
    try {
        const returnTweet=await Tweet.findByIdAndDelete(id);
        return returnTweet;
    } catch (error) {
        console.log(error);
    }
}

//comment get 
    async function getwithcomment(id){
        try {
            //lean function change mongoose document object into a simple object
            const returnTweet=await Tweet.findById(id).populate({path:'comments'}).lean();//comment model and its collection of array so use path
            return returnTweet;
        } catch (error) {
            console.log(error);
        }
    }
//pagination in api---
    async function getAll(offset,limit){//ofset use for skip ,limit use for how many item should be display
        try {
            const returnTweet=await Tweet.find().skip(offset).limit(limit)
        } catch (error) {
            
        }
    }
module.exports={
    create,destory,update,get,getwithcomment
};
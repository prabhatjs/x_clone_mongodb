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
            const returnTweet=await Tweet.findById(id).populate({path:'comments'});//comment model and its collection of array so use path
            return returnTweet;
        } catch (error) {
            console.log(error);
        }
    }

module.exports={
    create,destory,update,get,getwithcomment
};
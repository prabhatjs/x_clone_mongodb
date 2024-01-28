const tweetService=require('../service/tweet_service');

const createTweet=async (req,res)=>{
    try {
        const response=await tweetService.create(req.body);
        return res.status(201).json({
            success:true,
            message:'Successfully Created a new Tweet',
            data:response,
            err:{}
        })
    } catch (error) {
        const response=await tweetService.create(req,body);
        return res.status(500).json({
            success:false,
            message:'Error occured on time of created tweet',
            data:{},
            err:error
        })
    }
}

module.exports=createTweet;
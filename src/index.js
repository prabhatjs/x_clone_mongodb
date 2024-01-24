const express=require('express');
const connext=require('./config/database')
const TweetRepository=require('./repo/TweetRepo');
const HashtagRepo=require('./repo/HashtagRepo');
const Comment=require('./models/comments');
const tweetService=require('./service/tweet_service')
const app=express();
//example of tweet create without request response 
// const Tweet=require('./models/tweet')

app.listen(8009,async ()=>{
    console.log("server run");
    await connext();
    console.log("Mongodb connect");
    //!for example purpose only


    const tweet=await tweetService.create({
        content:'This is firts #dhoni #singh #mahendra'
    });
    console.log(tweet);
    //from hashtag get name by 
    // const response=await HashtagRepo.findByname(['Dhoni','2024']);
    // console.log(response);
    //bulk insert in hashtag
    // const tags=await HashtagRepo.bulkCreate(
    //     [
    //         {
    //             title:"Love",
    //             tweets:[]
    //         },{
    //             title:"Dhoni",
    //             tweets:[]
    //         },{
    //             title:"2024",
    //             tweets:[]
    //         },{
    //             title:"scam2024",
    //             tweets:[]
    //         },{
    //             title:"fighter",
    //             tweets:[]
    //         }
    //     ]
    // );
    //get virual data 
    // const tw=await TweetRepository.get('65abf4b70d20284b3525fbe1');
    // console.log(tw.userInfowithtweet);


    // const tweet=await TweetRepository.create({
    //     content:'FIrst Coment with Comment id',
    //     userEmail:'1996prabhat@gmail.com'
    // });
    // console.log(tweet);

   /* 
    const comment=await Comment.create({
        content:"New Comment",
        userEmail:"1996prabhat@hmail.com"
    })
    tweet.comments.push(comment);
    await tweet.save();
    console.log(tweet);
    */

    /**how to crreate tweet with comment 
    const tweet=await TweetRepository.create({
        content:'Thired Tweet',
        userEmail:'1996prabhat@gmail.com',
       comments:[{content:"nice",content:"Second Tweet "}],
    });
    **/
    /** 
        after tweet add comment--------
        tweet.comments.push({content:"First Comment nice"});
        await tweet.save();
    */
   
    /** 
     * show all tweet 
        const tweet=await Tweet.find({});
    */
    
    /**     show only one tweet--
            const tweet=await Tweet.find({"content":"Thired Tweet"});
            console.log(tweet);
            const tw=await TweetRepository.get('65a9752488e21db051baaf83');
            console.log(tw);
    */

    //delete tweet data

    // const dtwt=await TweetRepository.destory('65a9752488e21db051baaf83');
    // console.log(dtwt);

}); 


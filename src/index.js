const express=require('express');
const connext=require('./config/database')
const TweetRepository=require('./repo/TweetRepo');
const Comment=require('./models/comments');
const app=express();
//example of tweet create without request response 
// const Tweet=require('./models/tweet')

app.listen(8009,async ()=>{
    console.log("server run");
    await connext();
    console.log("Mongodb connect");
    //!for example purpose only

    const tw=await TweetRepository.getwithcomment('65abf4b70d20284b3525fbe1');
    console.log(tw);

/*
    const tweet=await TweetRepository.create({
        content:'FIrst Coment with Comment id',
        userEmail:'1996prabhat@gmail.com'
    });
    console.log(tweet);
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


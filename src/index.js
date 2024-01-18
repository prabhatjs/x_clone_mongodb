const express=require('express');
const connext=require('./config/database')
const TweetRepository=require('./repo/TweetRepo');
const app=express();
//example of tweet create without request response 
// const Tweet=require('./models/tweet')

app.listen(8009,async ()=>{
    console.log("server run");
    await connext();
    console.log("Mongodb connect");
    //!for example purpose only
    // const tweet=await Tweet.create({
    //     content:'Thired Tweet',
    //     userEmail:'1996prabhat@gmail.com'
    // });
    //show all tweet 
    //const tweet=await Tweet.find({});
    //show only one tweet--
    //const tweet=await Tweet.find({"content":"Thired Tweet"});
    //console.log(tweet);
    // const tw=await TweetRepository.get('65a9752488e21db051baaf83');
    // console.log(tw);

    const dtwt=await TweetRepository.destory('65a9752488e21db051baaf83');
    console.log(dtwt);

}); 


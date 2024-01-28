const createTweet =require('../../controller/tweet-controller');
const express=require('express');

const router=express.Router();

router.post('/tweet',createTweet);

module.exports=router;
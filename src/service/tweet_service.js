const HashtagRepo=require('../repo/HashtagRepo')
const TweetRepository=require('../repo/TweetRepo')

async function create(data){
        const content=data.content;
        let tags=content.match(/#[a-zA-Z0-9_]+/g).map((tag)=>tag.substring(1));
        const tweet=await TweetRepository.create(data);
        let PresentTags=await HashtagRepo.findByname(tags)//.map((tag)=>tag.title);
        console.log(PresentTags);
        PresentTags=PresentTags.map((tag)=>tag.title);
        //check value in array but not in array
        let newTags=tags.filter(tag=>!PresentTags.includes(tag));
        newTags=newTags.map(tag=>{
            return {title:tag, tweets:[tweet.id]}
        })
        const newHashtags=await HashtagRepo.bulkCreate(newTags);
        // let newHashtags=tags.filter(tag=>!)
        console.log(newHashtags);
        return tweet;
}

module.exports={
    create
};
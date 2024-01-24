const Hashtag=require('../models/hashtags');

async function create(data){
   try {
    const tag= await Hashtag.create(data);
    return tag;
   } catch (error) {
    console.log(error);
   }
}

async function get(id){
    try {
        const tags=await Hashtag.findById(id);
        return tags;
    } catch (error) {
        console.log(error);
    }

}

async function update(id,data){
    try {
        const tags=await Hashtag.findByIdAndUpdate(id,data);
        return tags;
    } catch (error) {
        console.log(error);
    }
}

async function destory(id){
    try {
        const tags=await Hashtag.findByIdAndDelete(id);
        return tags;
    } catch (error) {
        console.log(error);
    }
}

async function bulkCreate(data){
    try {
        const tags=await Hashtag.insertMany(data);
        return tags;
    } catch (error) {
        console.log(error);
    }
}

async function findByname(title){
    try {
        const tags=await Hashtag.find({
                title:title
        }).select("title -_id");
        return tags;
    } catch (error) {
        
    }
}


module.exports={
    create,destory,update,get,findByname,bulkCreate
};
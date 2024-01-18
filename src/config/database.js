const mongoose=require('mongoose');

const connext=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/mydb');
}

module.exports=connext;
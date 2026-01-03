const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);

const userSchema = mongoose.Schema({
    userName:String,
    name:String,
    age:Number,
    email:String, 
    password:String,
    profilepic:{
        type:String,
        default:"default.jpg",
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    }]
})
module.exports = mongoose.model("user",userSchema);
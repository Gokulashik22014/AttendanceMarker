import mongoose from "mongoose";

const usersSchema=mongoose.Schema({
    email:String,
    password:String,
    username:String,
    
})

const users=mongoose.model("users",usersSchema)

export default users
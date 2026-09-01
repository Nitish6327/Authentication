import mongoose from "mongoose";    

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:[true,"username is required"],
        unique:[true,"username must be unique"]

    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"email must be unique"]


    },
    password:{
        type:String,
        required:[true,"Password is required"]

    }
})
const userModel=mongoose.model("users",userSchema)
export default userModel;

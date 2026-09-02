import userModel from "../models/user.model.js"
import crypto from 'crypto'
import jwt from "jsonwebtoken"
export async function register(req,res){
    const{usernamename,email,password}=req.body
    const isAlreadyRegistered=await userModel.findOne({
        $or:[
            {username},
            {email}

        ]
    })
    if(isAlreadyRegistered){
        res.status(409).json({
            message:"Username  or email is alredy exist"
        })
    }

    const hashedPassword=crypto.createHash("sha256").digest("hex");
    const user =await userModel.create({
        username,
        email,
        password:hashedPassword
    })

}
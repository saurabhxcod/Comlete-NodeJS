import jwt from 'jsonwebtoken'
import { User } from '../Models/User.js'
export const isAuthenticated=async(req,res,next)=>{
    const token=req.header("Auth")
    // console.log("Checking Token",token)
    if(!token) res.json({message:"Login First"})
    const decoded=jwt.verify(token,process.env.JWT)
    // console.log('token data',decoded)
    const id=decoded.userId;
    let user=await User.findById(id)
    if(!user) return res.json({message:"User Not Found"})
    
    req.user=user;   //req.user=req.saurabh etc..

    next();




}
const jwt=require("jsonwebtoken")
const User=require('../models/userSchema')


const auth= async(req,res,next)=>{
    try{
       // console.log(req.cookies.jwtoken);
        const token=req.cookies.jwtoken;
        const verifyToken=jwt.verify(token,"yashhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
        //console.log(verifyToken._id);
        const rootUser=await User.findOne({_id:verifyToken._id,"tokens.token":token})
        if(!rootUser){ throw new Error("user not found")}
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id
        next();
    }
    catch (error) {
        res.status(401).send("Unautorized: No token provided")
   console.log(error);
    }
}

module.exports=auth
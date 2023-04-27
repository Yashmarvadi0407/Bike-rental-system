const express=require("express")
const mongoose=require("mongoose")
const app=express()
const router=express.Router()
const User=require('../models/userSchema')

module.exports=router.post("/signup",async(req,res)=>{
    const {name,phone,email,password,cpassword} = req.body;
   if(!name || !phone || !email || !password  || !cpassword){
    return res.json({error:"please filled the form properly"})
   }

   try{
        const userExist=await User.findOne({email: email})

        if(userExist){
            return res.json({error:"User Email already exists"})
        }
        else if(password != cpassword){
            return res.status(422).json({error: "Passowrds are not matching"})
        }
        else{
            const user = new User ({name, phone, email, password, cpassword});
    
                await user.save();

                res.status(201).json({ message: "user registered successfully"});
            
        }
   }
   catch (error){
   console.log(error);
   }

})
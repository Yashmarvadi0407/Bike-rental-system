const express=require("express")
const mongoose=require("mongoose")
const app=express()

const User=require('../models/userSchema')
module.exports=app.post("/contact",async(req,res)=>{
    try{
       const {name,email,phone,meassage}=req.body
      console.log(name);
      console.log(email);
      console.log(phone);
      //console.log(req.userID);
      console.log("++++++++++");
       if(!name || !email || !phone || !meassage){
        return res.json({error:"Please fill form"})
       } 
       const userContact=await User.findOne({_id:req.userID})
       console.log("++++++++++");
       console.log(userContact);
       if(userContact){ 
        const userMessage=await userContact.addMessage(name,email,phone,meassage)
        await userContact.save()
        res.json({message:"user contact successfull"})
       }
  
    }
    catch(error){
           console.log(error);
    }
})
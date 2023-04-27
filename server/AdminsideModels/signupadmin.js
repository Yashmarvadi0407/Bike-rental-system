const express=require('express')
const router=express.Router()

// const User=require('../models/userSchema')
const Admin=require('../models/AdminSchema')


module.exports=router.post("/signupadmin",async(req,res)=>{
    const {adminName,phone,email,password,cpassword} = req.body
    if(!adminName || !phone || !email || !password || !cpassword){
        return res.status(422).json({error:"Please filled the form properly"})
    }

    try {
        const userExist = await Admin.findOne({ email: email});
        
        if(userExist){
            return res.status(422).json({error: "Please filled the form properly"})
        }
        else if(password != cpassword){
            return res.status(422).json({error: "Passowrds are not matching"})
        }
        else{
            const user = new Admin ({adminName, phone, email, password, cpassword});

            await user.save();

            res.status(201).json({ message: "Admin registered successfully"});
            res.send(user);
        }

    } catch (error) {
        console.log(error);
}

})
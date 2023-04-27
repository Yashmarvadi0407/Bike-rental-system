const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcryptjs');

const Admin = require('../models/AdminSchema');

// Admin Signin
module.exports =  router.post('/signinadmin', async(req, res)=>{

    try {
        let token;
        const { name , password } = req.body;
         console.log(req.body);
        if(!name || !password){
            return res.status(400).json({error: "invalid crededntials"})
        }
          console.log(name);
          console.log(password);
        const adminSignin = await Admin.findOne({ adminName: name });
        console.log(adminSignin);
        console.log(name);
        if (adminSignin){
                const isSame = await bcrypt.compare(password, adminSignin.password);
                
                token = await adminSignin.generateAuthToken();

                res.cookie("jwtAdmin", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly:true
                })
               console.log(jwtAdmin);
                if(!isSame){
                    res.status(400).json({error: "invalid crededntials"})
                }else{
                    res.json({message: "Admin signin successfully"})
                }

        }else{
            res.status(400).json({error: "invalid crededntials"})
        }


    } catch (error) {
        console.log(error);
    }
});
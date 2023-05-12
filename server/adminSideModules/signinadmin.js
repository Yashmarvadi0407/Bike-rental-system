const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcryptjs');

const Admin = require('../models/adminSchema');

// Admin Signin
module.exports =  router.post('/signinAdmin', async(req, res)=>{

    try {
        let token;
        const { adminName:name , adminPassword:password } = req.body;

        if(!name || !password){
            return res.status(400).json({error: "invalid crededntials"})
        }
          console.log(name);
          console.log(password);
        const adminSignin = await Admin.findOne({ name: name });

        if (adminSignin){
                const isSame = await bcrypt.compare(password, adminSignin.password);
                

                token = await adminSignin.generateAuthToken();

                res.cookie("jwtAdmin", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly:true
                })

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
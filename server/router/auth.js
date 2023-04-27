const express=require("express")
const jwt=require("jsonwebtoken")
const router=express.Router()
const bcrypt=require('bcryptjs')

require("../db/conn")

router.get("/",(req,res)=>{
    res.send("home page router")
})



//client side modules
router.use(require('../clientsideController/signin'))
router.use(require('../clientsideController/signup'))

//admin side models
router.use(require('../AdminsideModels/signupadmin'))
router.use(require('../AdminsideModels/signinadmin'))


module.exports = router;
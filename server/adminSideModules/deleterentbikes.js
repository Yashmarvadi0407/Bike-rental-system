const express = require('express');
const router = express.Router();
const adminAuthentication = require("../middelware/adminAuthentication");

const Rentbike = require('../models/rentbikeSchema');


module.exports = router.post('/deleteRentBikeFromDashboard', async (req, res)=>{
    const getId = req.body.bikeIdFromDashBoard
    console.log('hiii',req.body);
    const x = getId
    const findBike = await Rentbike.findOneAndDelete({_id: x})
    console.log(x);
    res.send({sucess:true})
})
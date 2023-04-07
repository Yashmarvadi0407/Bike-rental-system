const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Bike-Rental-system")
.then(()=>{ console.log("data base connected");})
.catch((err)=>{console.log(err)});
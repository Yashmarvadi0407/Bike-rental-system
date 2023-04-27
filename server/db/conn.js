const mongoose = require("mongoose")


//console.log(process.env.DATABASE);
mongoose.connect("mongodb://localhost:27017/Bike-Rental-System")
.then(()=>{ console.log(" data base is connected");})
.catch((e)=>{console.log(e);})

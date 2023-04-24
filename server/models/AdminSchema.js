const mongoose=require('mongoose');

const adminSchema=mongoose.Schema({

 adminName:{
    type:"String",
    required:true
 },
 email:{
    type:String,
    required:true
 },
 phone:{
    type:String,
    required:true
 },
 password:{
    type:String,
    required:true
 },
 cpassword:{
    type:String,
    required:true
 }

},{

   timestamps:true
})

const Admin= new mongoose.model("Admin",adminSchema)

module.exports=Admin
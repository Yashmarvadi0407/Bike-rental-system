const mongoose=require('mongoose');

const rentbikeschema=mongoose.Schema({
    bikeById:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Renybike",
        required:true,
    },
    allReviews:[{
        userById:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        comments:{
            type:String,
            required:true
        }
    }]
},{
    timestamps:true
})


const RentbikeReview= new mongoose.model("RentbikeReview",rentbikeschema)

module.exports=RentbikeReview
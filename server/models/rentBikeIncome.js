const mongoose=require("mongoose")

const rentBikeincomeschema= mongoose.Schema({
    userById:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    soldItems:[{
            productid:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"RentBike",
                required:true
            },
            bookhours:{
                type:Number,
                required:true
            },
            brand:{
                type:String,
                required:true
            },
            model:{
                type:String,
                required:true
            },
            retailpriceperitem:{
                type:Number,
                required:true
            },
            totalincome:{
                type:Number,
                required:true
            }
        }
    ]},{timestamps:true})

const RentBikeIncome= new mongoose.model("RentBikeIncome",rentBikeincomeschema)

module.exports=RentBikeIncome
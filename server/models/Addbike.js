const mongoose=require("mongoose")

const AddbikeSchema= mongoose.Schema({
    brand:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    color:{
      type:String,
      required:true
    },
    seats:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    rent:{
        type:String,
        required:true
    },
    availability:{
        type:String,
        default:"Available for rent"
    },
    bookhours:{
        type:String,
        required:true

    }
},{timestamps:true})

const RentBike=new mongoose.model("RentBike",AddbikeSchema)

module.exports=RentBike
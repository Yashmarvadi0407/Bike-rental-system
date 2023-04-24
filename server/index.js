const express=require('express');
var bodyparser=require("body-parser")
const app = express();
require("./models/db/conn.js")

const User=require("./models/userSchema")
const Admin=require("./models/AdminSchema")
const RentBike=require("./models/Addbike") 

app.use(bodyparser.json())
//userdata
app.post("/userdata",async(req,res)=>{
    console.log("hello");
    //console.log(req);
    const user= new User(req.body)
    await user.save()
    // console.log("hello");
     console.log(user);
    res.send(user)
})

//getapi
app.get("/",(req,res)=>{
    res.send(" hello world")
})

//postadmin data
app.post("/admin",async(req,res)=>{

    const admin= new Admin(req.body)
    await admin.save()
    console.log(admin);
    res.send(admin)
})

//postbikedata

app.post("/bike",async(req,res)=>{

    const bike=new RentBike(req.body)
     await bike.save()
     res.send(bike)
})


app.listen(8000,"127.0.0.1",()=>{
    console.log("server is started");
})
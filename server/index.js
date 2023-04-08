const express=require('express')
const User = require('./model/userSchema.js')
const app=express()
const port=5000




require("./db/index.js")
app.get('/',(req,res)=>{
    res.send('Hello World')
    console.log("hello");
})



app.post('/userdata',async(req,res)=>{
    console.log("yash");
    // console.log(req.body);
    const name=req.body.name
    console.log(name);
    // const password=req.body.password;
    // const email=req=body.email;
    // const cpassword=req.body.cpassword;
    // const phone=req.body.phone

try{
    
const user=new User(req.body)
 const data=await user.save()
console.log(data);
}
catch(error){
    console.log(error);
}
}
)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
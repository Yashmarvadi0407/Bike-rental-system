const express=require('express');
var bodyparser=require("body-parser")
const app = express();
const cookieParser = require("cookie-parser");

// dotenv.config({path:'./config.env'})
require("./db/conn")


app.use(express.json());
app.use(cookieParser());

app.use(require('./router/auth'));


// app.use(require('./middleware/userAuthentication'))


// const Admin=require("./models/AdminSchema")
// const RentBike=require("./models/Addbikeschema.js") 
// const RentbikeReview=require("./models/rentbikeReviewSchema.js");
// const RentBikeIncome = require('./models/rentBikeIncome.js');
// require('./clientsideController/contactform.js');
// app.use(bodyparser.json())


//user-side
// app.use(require('./clientsideController/signup.js'))
// app.use(require('./clientsideController/signin.js'))
// app.use(require('./clientsideController/contactform.js'))





//userdata
// app.post("/userdata",async(req,res)=>{
//     console.log("hello");
//     //console.log(req);
//     const user= new User(req.body)
//     await user.save()
//     // console.log("hello");
//      console.log(user);
//     res.send(user)
// })

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
// rent bike reviews
app.post("/bikereview", async(req,res)=>{
    console.log("reviews");
    console.log(req.body);
    const rentbikereview= new RentbikeReview(req.body)
    console.log(rentbikereview);
    await rentbikereview.save()
    res.send(rentbikereview)
})

//rent bike income

app.post("/bikeincome",async(req,res)=>{

    const rentbikeincome=new RentBikeIncome(req.body)
    await rentbikeincome.save()
    res.send(rentbikeincome)
    console.log(rentbikeincome);
})


app.listen(8000,"127.0.0.1",()=>{
    console.log("server is started");
})
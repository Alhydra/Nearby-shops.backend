// Initial Instances 
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const mongoose   = require('mongoose');
const secret = require("./config")

//Routes
const authRouter = require("./app/Routes/authRouter")
const userRouter = require("./app/Routes/userRouter")
const shopRouter = require("./app/Routes/shopRouter")



// create app instance
const app = express()

// add secret
app.set("superSecret", secret)

// log requests
app.use(morgan('tiny'))

// connect to database
mongoose.connect("mongodb://localhost:27017/NearbyShops", { useNewUrlParser: true })

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// main route
app.get("/", (req,res)=>{

    res.send("Hello world")
})

// authentification Route
app.use("/auth",authRouter)
// user Router
app.use("/user",userRouter)
// shop Router
app.use("/shop",shopRouter)

// Launch server
var port = process.env.PORT || 3001;
app.listen(port)
console.log('Server runs on port ' + port);



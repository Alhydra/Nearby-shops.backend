// Initial Instances 
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const mongoose   = require('mongoose');
const secret = require("./config")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const config = require("./config")


//Routes
const authRouter = require("./app/Routes/authRouter")
const userRouter = require("./app/Routes/userRouter")
const shopRouter = require("./app/Routes/shopRouter")
const setupRouter = require("./app/Routes/setupRouter")



// create app instance
const app = express()

//enable cors
app.use(cors())

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

app.use("/api",(req,res,next)=>{
    const token = req.body.token || req.query.token || req.headers['x-access-token']


    if(token){
        jwt.verify(token,config.secret, (err,decoded)=>{

            if(err){
                return res.json({ success: false, message: 'Failed to authenticate token.' })
            }else{
                req.decoded = decoded
                console.log("decoded",decoded);
                
            }

        })
    }else{
        req.decoded = decoded

    }
    next()
    
})

// authentification Route
app.use("/auth",authRouter)
// user Router
app.use("/api/user",userRouter)
// shop Router
app.use("/api/shop",shopRouter)
//setup router
app.use("/setup",setupRouter)

// Launch server
var port = process.env.PORT || 3001;
app.listen(port)
console.log('Server runs on port ' + port);



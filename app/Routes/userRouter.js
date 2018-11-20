const express = require("express")
const userRouter = express.Router()
const User = require("../models/User.js")


// ADD ONE USER
userRouter.post("/",(req,res)=>{

    console.log("user post");
    
    const user = new User()
    user.email = req.body.email
    user.password = req.body.password
    user.lat=req.body.lat
    user.lng=req.body.lng


    user.save((err)=>{
        if(err){
            res.send(err.message)
        }else{
            res.send({status:"User added",user})
        }
    })
})


module.exports = userRouter


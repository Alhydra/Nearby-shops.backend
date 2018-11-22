const express = require("express")
const userRouter = express.Router()
const User = require("../models/User.js")


// ADD ONE USER
userRouter.post("/",(req,res)=>{

    console.log("user post");
    
    const user = new User()
    user.email = req.body.email
    user.password = req.body.password


    user.save((err)=>{
        if(err){
            res.send({success:false,message:err.message})
        }else{
            res.send({success:true,status:"User added",user})
        }
    })
})

// GET USER DATA
userRouter.get("/",(req,res)=>{
    const email = req.decoded.email
    console.log("decoded",req.decoded)
    console.log("email",req.decoded.email)

    User.findOne({email:email}, (err,user)=>{
        if (err){
            res.send(err.message)
        }else{
            res.send(user)
        }
    })
})



module.exports = userRouter


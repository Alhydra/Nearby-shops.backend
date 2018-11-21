const express = require("express")
const authRouter = express.Router()
const User = require("../models/User")
const jwt = require("jsonwebtoken")
const config = require("../../config")


authRouter.get("/",(req,res)=>{
    res.send("Authentification in process")
})

authRouter.post("/", (req,res)=>{
    User.findOne({
        email: req.body.email
    },(err,user)=>{

        if(err){
            throw err
        }
        
        if(!user){
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        }else if(user){

            if(user.password != req.body.password){
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            }else{


                const payload = {email:user.email}
                const token = jwt.sign(payload,config.secret,{
                    expiresIn: "30d"
                })

                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token,
                    email:user.email,
                    coord:{
                        lat:user.lat,
                        lng:user.lng
                    }
                })
            }
        }

    })
})



module.exports =authRouter




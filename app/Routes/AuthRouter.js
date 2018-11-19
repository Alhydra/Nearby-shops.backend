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


                
                const token = jwt.sign({},config.secret,{
                    expiresIn: "30d"
                })

                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                })
            }
        }

    })
})

authRouter.use((req,res,next)=>{
    const token = req.body.token || req.query.token || req.headers['x-access-token']


    if(token){
        jwt.verify(token,app.get("superSecret"), (err,decoded)=>{

            if(err){
                return res.json({ success: false, message: 'Failed to authenticate token.' })
            }else{
                req.decoded = decoded
                next()
            }

        })
    }else{
        // if there is no token
        // return an error
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });

    }
    
})

module.exports =authRouter




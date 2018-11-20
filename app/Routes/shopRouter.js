const express = require("express")
const shopRouter = express.Router()
const Shop = require("../models/Shop.js")


//GET ALL SHOPS
shopRouter.get("/",(req,res)=>{
    Shop.find({},(err,shops)=>{
        if (err){
            res.send({ success: false, message: err.message})
        }else{
            res.send({ success: true, data: shops})
        }
        
    })

})



module.exports = shopRouter


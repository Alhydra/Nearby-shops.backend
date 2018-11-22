const express = require("express")
const shopRouter = express.Router()
const Shop = require("../models/Shop.js")


//GET ALL SHOPS
shopRouter.get("/",(req,res)=>{
    if(req.decoded){
        Shop.find({},(err,shops)=>{
        if (err){
            res.send({ success: false, message: err.message})
        }else{
            res.send({ success: true, data: shops})
        }
        
    })
    }
    

})


// UPDAT ONE SHOP
shopRouter.put("/:shop_id",(req,res)=>{

    Shop.findByIdAndUpdate(req.params.shop_id, req.body ,{new: true}, ((err,shop)=>{

        console.log("body",1,req.body)
        
        if(err){
            
            res.send(err.message)
        }else{
            
            res.send({status:"Shop updated",shop})
        }
        
        
    }))
})

module.exports = shopRouter


const express = require("express")
const setupRouter = express.Router()
const Shop = require("../models/Shop.js")


//Add 10 shops to the database

setupRouter.get("/",(req,res)=>{

    const shops=[
        {name:"Alchimies",imageUrl:"https://media-cdn.tripadvisor.com/media/photo-s/0d/a9/60/a1/getlstd-property-photo.jpg",lat:34.022405,lng:-6.834543,likes:["ellhydra1@gmail.com"]},
        {name:"Megamall",imageUrl:"https://media-cdn.tripadvisor.com/media/photo-s/05/35/fb/76/megamall.jpg",lat:34.032405,lng:-6.934543,likes:["ellhydra1@gmail.com","ellhydra2@gmail.com"]},
        {name:"Au Grain de Sesame",imageUrl:"https://media-cdn.tripadvisor.com/media/photo-f/0a/f4/7b/aa/espace-galerie-art-et.jpg",lat:34.052405,lng:-6.814543,likes:[]},
        {name:"Cooperative Ibdaa",imageUrl:"https://media-cdn.tripadvisor.com/media/photo-f/05/b3/f5/46/cooperative-ibdaa.jpg",lat:34.092405,lng:-6.734543,likes:[]},
        {name:"Apia Huiles et Miels",imageUrl:"https://media-cdn.tripadvisor.com/media/photo-i/10/6d/ce/0c/apia-huiles-et-miels.jpg",lat:34.122405,lng:-6.834543,likes:["ellhydra1@gmail.com",,"ellhydra2@gmail.com"]},
        {name:"Abla Ababou Galerie",imageUrl:"https://media-cdn.tripadvisor.com/media/photo-i/11/03/eb/8b/facade-de-la-galerie.jpg",lat:34.022405,lng:-6.634543,likes:[]},
        {name:"Dune Galerie",imageUrl:"https://media-cdn.tripadvisor.com/media/photo-f/0b/b4/86/01/img-20160623-094151-largejpg.jpg",lat:34.022405,lng:-6.834543,likes:[]},
        {name:"Aux Merveilles de Marrakech",imageUrl:"https://media-cdn.tripadvisor.com/media/photo-f/06/cd/05/fd/aux-merveilles-de-marrakech.jpg",lat:36.022405,lng:-6.034543,likes:[]},
        {name:"Ensemble Artisanal",imageUrl:"https://media-cdn.tripadvisor.com/media/photo-f/05/c1/5c/33/ensemble-artisanal.jpg",lat:34.022405,lng:-7.034543},
        {name:"33 Rue Majorelle",imageUrl:"https://media-cdn.tripadvisor.com/media/photo-s/02/62/b4/b9/overview.jpg",lat:34.022405,lng:-8.834543,likes:[]},
    
    
    ]
    
    shops.map((m)=>{
        const shop = new Shop()
    
        shop.name= m.name
        shop.imageUrl=m.imageUrl
        shop.lat=m.lat
        shop.lng=m.lng,
        shop.likes=m.likes
    
        shop.save((err)=>{
            console.log("shop added")
        })
    
    })

    res.send("shops database ready")

})



module.exports = setupRouter


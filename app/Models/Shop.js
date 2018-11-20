const mongoose = require("mongoose")
const Schema = mongoose.Schema

const shopSchema = new Schema({
    name:String,
    imageUrl:String,
    lat:Number,
    lng:Number
})

module.exports = mongoose.model("Shop",shopSchema)

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    lat:{type:Number,default:0},
    lng:{type:Number,default:0}
})

module.exports = mongoose.model("User",userSchema)
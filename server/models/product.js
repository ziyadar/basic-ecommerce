const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    price:{
        type: Number
    },
    discount:{
        type: Number
    },
    outOfStock:{
        type:Boolean
    },
    img:{
        type: String
    }
},{timesstamps:true})

const product = mongoose.model('Product',productSchema)
module.exports = product
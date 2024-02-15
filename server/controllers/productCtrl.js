const product = require("../models/product") 
 
 //create product
const CreateProduct = async(req,res) => {
    try {
        // check if product exist in the database
        const checkProduct = await product.findOne({productName: req.body.productName})
        if(checkProduct){
            return res.status(401).json({errorMessage:"Product already exist"})
        }
        // if product dosent exist in database we create the product
        const addproduct = await product.create({
            productName:req.body.productName,
            price:req.body.price,
            discount:req.body.discount,
            outOfStock:req.body.outOfStock,
            img: req.body.img
        })
        res.status(201).json({message:'Product Created'})
    } catch (error) {
        //(503)-internal server error status
        res.status(503).json({errorMessage:"Something went wrong"})
    }
}



// get all products

const getAllProducts = async(req,res) =>{
    try{
        const getall = await product.find({})
        res.status(200).json({message:'Success', data: getall})
    } catch(error) {
        res.status(503).json({errorMessage:'Something went wrong'})
    }
}


const singleProduct = async(req,res) =>{
    try {
        const single = await product.findById({_id: req.params.id})
        res.status(200).json({message:'Success', data:single})
    } catch (error) {
        res.status(503).json({errorMessage:'something went wrong'})
        
    }
}


module.exports = {
    CreateProduct,
    getAllProducts,
    singleProduct
}

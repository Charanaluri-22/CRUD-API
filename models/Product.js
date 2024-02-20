const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required feild"],
    },
    quantity:
    {
        type:Number,
        required:[true,"Quantity is required feild"],
        default:0
    },
    price:
    {
        type:Number,
        required:[true,"Price is required feild"],
    },
    image:
    {
        type:String,
    }
    
},
{
    timestamps:true
})
const Product = mongoose.model("Product",productSchema);
module.exports=Product;
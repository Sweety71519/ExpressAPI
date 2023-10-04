const mongoose =require("mongoose")

const Productschema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Product name must be required."]
    },
    maincategory:{
        type:String,
        required:[true,"Product maincategory must be required."]
    },
    subcategory:{
        type:String,
        required:[true,"Product subcategory must be required."]
    },
    brandname:{
        type:String,
        required:[true,"brandname Brandname must be required."]
    },
    size:{
        type:String,
        required:[true,"Product Size must be required."]
    },
    color:{
        type:String,
        required:[true,"Product Color must be required."]
    },
    stock:{
        type:String,
        default:"In Stock"
    },
    total:{
        type:Number,
        required:[true,"Product total must be required."]
    },
    baseprice:{
        type:Number,
        required:[true,"Product baseprice must be required."]
    },
    finalprice:{
        type:Number,
        required:[true,"Product finalprice must be required."]
    },
    discount:{
        type:Number,
        required:[true,"Product discount must be required."]
    },
    qty:{
        type:Number,
        required:[true,"Product Quantity must be required."]
    },
    discription:{
        type:String,
        default:""
    },
    pic1:{
        type:String,
        default:""
    },
    pic2:{
        type:String,
        default:""
    },
    pic3:{
        type:String,
        default:""
    },
    pic4:{
        type:String,
        default:""
    }
})

const Product = new mongoose.model("product",Productschema);

module.exports=Product

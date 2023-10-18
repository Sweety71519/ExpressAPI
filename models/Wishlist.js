const mongoose =require("mongoose")

const Wishlistschema =new mongoose.Schema({
    userid:{
        type:String,
        required:["userid name must be required."]
    },
    productid:{
        type:String,
        required:["productid name must be required."]
    },
    name:{
        type:String,
        unique:true,
        required:["Wishlist name must be required."]
    },
    size:{
        type:String,
        required:["Wishlist name must be required."]
    },
    color:{
        type:String,
        required:["Wishlist name must be required."]
    },
    brandname:{
        type:String,
        required:["brandname name must be required."]
    },
    price:{
        type:Number,
        required:["Wishlist name must be required."]
    },
    pic:{
        type:String,
        required:["qty must be required."]
    }
    
})

const Wishlist = new mongoose.model("wishlist",Wishlistschema);

module.exports=Wishlist

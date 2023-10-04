const mongoose =require("mongoose")

const Wishlistchema =new mongoose.Schema({
    userid:{
        type:String,
        required:["Cart name must be required."]
    },
    productid:{
        type:String,
        required:["Cart name must be required."]
    },
    name:{
        type:String,
        unique:true,
        required:["Cart name must be required."]
    },
    size:{
        type:String,
        unique:true,
        required:["Cart name must be required."]
    },
    color:{
        type:String,
        unique:true,
        required:["Cart name must be required."]
    },
    brandname:{
        type:String,
        required:["brandname name must be required."]
    },
    price:{
        type:Number,
        required:["Cart name must be required."]
    },
    pic:{
        type:String,
        required:["qty must be required."]
    }
    
})

const Wishlist = new mongoose.model("wishlist",Wishlistchema);

module.exports=Wishlist

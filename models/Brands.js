const mongoose =require("mongoose")

const Brandschema =new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:["Brand name must be required."]
    }
})

const Brand = new mongoose.model("brand",Brandschema);

module.exports=Brand

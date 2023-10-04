const mongoose =require("mongoose")

const SubCategoryschema =new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:["SubCategory name must be required."]
    }
})

const SubCategory = new mongoose.model("subcategory",SubCategoryschema);

module.exports=SubCategory

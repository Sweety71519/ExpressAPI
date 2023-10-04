const mongoose =require("mongoose")

const MainCategoryschema =new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:["MainCategory name must be required."]
    }
})

const MainCategory = new mongoose.model("maincategory",MainCategoryschema);

module.exports=MainCategory

const mongoose =require("mongoose")

const Userschema =new mongoose.Schema({
    name:{
        type:String,
        required:["Name must be required."]
    },
    user:{
        type:String,
        unique:true,
        required:["user name must be required."]
    },
    email:{
        type:String,
        unique:true,
        required:["email address must be required."]
    },
    phone:{
        type:String,

        required:["phone no. must be required."]
    },
    password:{
        type:String,
        required:["password must be required."]
    },
    address:{
        type:String,
        default:true
    },
    pin:{
        type:String,
        default:true
    },
    state:{
        type:String,
        default:true
    },
    city:{
        type:String,
        default:true
    },
    pic:{
        type:String,
        default:true
    },
    role:{
        type:String,
        default:true
    }
})

const User = new mongoose.model("user",Userschema);

module.exports=User

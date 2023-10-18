const mongoose = require("mongoose")


const ContactUsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Must Required"]
    },
    email:{
        type:String,
        required:[true,"Email Must Required"]
    },
    phone:{
        type:String,
        required:[true,"Phone Must Required"]
    },
    subject:{
        type:String,
        required:[true,"Subject Must Required"]
    },
    message:{
        type:String,
        required:[true,"Message Must Required"]
    },
    status:{
        type:String,
        default:"Active"
    },
    date:{
        type:String,
        default:""
    }
})
const ContactUs = new mongoose.model("ContactUs",ContactUsSchema)

module.exports = ContactUs
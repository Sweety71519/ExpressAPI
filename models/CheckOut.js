const mongoose =require("mongoose")

const CheckOutchema =new mongoose.Schema({
    userid:{
        type:String,
       
    },
    orderstatus:{
        type:String,
        required:["Cart name must be required."]
    },
    paymentstatus:{
        type:String,
        unique:true,
        required:["Cart name must be required."]
    },
    paymentmode:{
        type:String,
        unique:true,
        required:["Cart name must be required."]
    },
    rppid:{
        type:String,
        unique:true,
        required:["Cart name must be required."]
    },
    subtotal:{
        type:String,
        unique:true,
        required:["Cart name must be required."]
    },
    shipping:{
        type:String,
        unique:true,
        required:["Cart name must be required."]
    },
    total:{
        type:String,
        required:["brandname name must be required."]
    },
    products:[{
        total:{
            type:String
        },
        price:{
            type:Number
           
        },
        qty:{
            type:Number
           
        },
        pic:{
            type:String
        }
    }

    ]
    
    
})

const CheckOut= new mongoose.model("checkout",CheckOutchema);

module.exports=CheckOut

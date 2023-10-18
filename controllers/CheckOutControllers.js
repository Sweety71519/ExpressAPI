const Checkout=require("../models/CheckOut")

async function create(req,res){
    try {
        var data= new Checkout(req.body)
        data.save()
        res.send({result:"done",message:"Record Created Successfully"})
    } catch (error) {
        if(error.errors.userid)
        res.send({result:"Fail",message:error.errors.userid.message})
        else 
        res.status(500).send({result:"Fail",message:"Internal Server Error"})
        
    }

}

async function get(req,res){
    try {
        var data = await Checkout.find().sort({_id:-1})
        res.send({ result: "Done", count: data.length, data: data })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" }) 
    }
}

async function get(req,res){
    try {
        var data = await Checkout.findOne({_id:req.params._id})
        if(data){
            res.send({ result: "done",data: data })
        }
        else{
            res.send({ result: "Fail",data: data })
        }
        
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" }) 
    }
}

async function get(req,res){
    try {
        var data = await Checkout.findOne({_id:req.params._id})
        if(data){
            res.send({ result: "done",data: data })
        }
        else{
            res.send({ result: "Fail",data: data })
        }
        
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" }) 
    }
}
async function getSingleData(req,res){
    try {
        var data = await Checkout.findOne({_id:req.params._id})
        if(data){
            res.send({ result: "done",data: data })
        }
        else{
            res.send({ result: "Fail",data: data })
        }
        
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" }) 
    }
}
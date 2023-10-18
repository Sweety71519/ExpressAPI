const Wishlist =require("../models/Wishlist")

async function create(req,res){
    try {
        var data = new Wishlist(req.body)
        data.save()
        res.send({result:"done",message:"Wishlist Record is created",data:data})
    } catch (error) {
        if (error.errors.userid)
        res.status(400).send({ result: "Fail", message: error.errors.userid.message })
    else if (error.errors.productid)
        res.status(400).send({ result: "Fail", message: error.errors.productid.message })
    else if (error.errors.name)
        res.status(400).send({ result: "Fail", message: error.errors.name.message })
    else if (error.errors.brand)
        res.status(400).send({ result: "Fail", message: error.errors.brand.message })
    else if (error.errors.color)
        res.status(400).send({ result: "Fail", message: error.errors.color.message })
    else if (error.errors.size)
        res.status(400).send({ result: "Fail", message: error.errors.size.message })
    else if (error.errors.price)
        res.status(400).send({ result: "Fail", message: error.errors.price.message })
    else
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
        
    }
}

async function get(req,res){
    try {
        var data = await Wishlist.find().sort({_id:-1})
        res.send({result:"done",count:data.length,data:data})
        
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" }) 
    }
}

async function getSingleData(req,res){
    try {
        var data = await Wishlist.findOne({_id:req.params._id})
        if(data){
            res.send({result:"done",data:data})
        }
    else{
        res.status(500).send({ result: "Fail", message: "Data Not Found." }) 
    }
        
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" }) 
    }
}

async function updatedata(req,res){
    try {
        var data = await Wishlist.findOne({_id:req.params._id})
        if(data){
            data.name=req.body.name ?? data.name
            data.productid=req.body.productid ?? data.productid
            data.brand=req.body.brand ?? data.brand
            data.color=req.body.color ?? data.color
            data.size=req.body.size ?? data.size
            await data.save()
            res.send({result:"done",message:"Record is Updated",data:data})
        }
        else{
            res.status(500).send({ result: "Fail", message: "Data not found" })

        }   
        
    } catch (error) {
    if (error.errors.productid)
        res.status(400).send({ result: "Fail", message: error.errors.productid.message })
    else if (error.errors.name)
        res.status(400).send({ result: "Fail", message: error.errors.name.message })
    else if (error.errors.brand)
        res.status(400).send({ result: "Fail", message: error.errors.brand.message })
    else if (error.errors.color)
        res.status(400).send({ result: "Fail", message: error.errors.color.message })
    else if (error.errors.size)
        res.status(400).send({ result: "Fail", message: error.errors.size.message })
    else if (error.errors.price)
        res.status(400).send({ result: "Fail", message: error.errors.price.message })
    else
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
        
    }
}

async function deletedata(req,res){
    try {
        var data= await Wishlist.findone({_id:req.params._id})
        if(data){
           await data.delete({_id:req.params._id})
           res.send({result:"done",message:"Record Deleted Successfully."})
        }
        else{
            res.status(500).send({ result: "Fail", message: "Data Not Found." })  
        }

    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
}
module.exports=[create,get,updatedata,deletedata,getSingleData]
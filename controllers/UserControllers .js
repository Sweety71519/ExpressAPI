const User = require("../models/User")
const fs=require("fs")


async function create(req,res){
    try{
      var data=new User(req.body)
      await data.save()
      res.send({result:"done",message:"User Record is created",data:data})
    }
    catch(error){
     if(error.errors.name)
      res.status(400).send({result:"Fail",message:error.errors.name.value})
      else if(error.errors.email)
      res.status(400).send({result:"Fail",message:error.errors.email.value})
      else if(error.errors.user)
      res.status(400).send({result:"Fail",message:error.errors.user.value})
      else if(error.errors.phone)
      res.status(400).send({result:"Fail",message:error.errors.phone.value})
      else if(error.errors.password)
      res.status(400).send({result:"Fail",message:error.errors.password.value})
    else{
    console.log("data--3",data);
    res.status(500).send({result:"Fail",message:"Internal Server Error."})
    }
    }
}

async function get(req,res){
  try{
    var data= await User.find().sort({_id:-1})
   res.send({result:"done",count:data.length,data:data})
  }
  catch(error){

  res.status(500).send({result:"Fail", message:"Internal Server Error."})
  }
}

async function getSingleData(req,res){
  try{
    var data= await User.findOne({_id:req.params._id})
    if(data)
    res.send({result:"done",data:data})
  else
  res.status(500).send({result:"Fail",message:"Data not found."})
    
  }
  catch(error){

  res.status(500).send({result:"Fail",message:"Internal Server Error."})
  }
}

async function updatedata(req,res){
  try{
    var data= await User.findOne({_id:req.params._id})
    console.log("data",data);
    if(data)
    {
    data.name=req.body.name ?? data.name
    data.email=req.body.email ?? data.email
    data.phone=req.body.phone ?? data.phone
    data.address=req.body.address ?? data.address
    data.state=req.body.state ?? data.state
    data.pin=req.body.pin ?? data.pin
    data.city=req.body.city ?? data.city
    try {
      if(req.file){
        fs.unlinkSync("public/uploads/users"+data.pic)
      }
      data.pic=req.file.pic[0].filename
    } catch (error) {}
   await data.save()
    res.send({result:"done",message:"Record is Updated",data:data})
    }
   else
   res.status(500).send({result:"Fail",message:"Data not found."})
  }
  catch(error){
  res.status(500).send({result:"Fail",message:"Internal Server Error."})
  }
}

async function deletedata(req,res){
  try{
    var data= await User.findOne({_id:req.params._id})
    if(data)
    {
      try {
        if(req.files.pic){
          fs.unlinkSync("public/uploads/Users"+data.pic)
        }
      } catch (error) {}      
    await data.deleteOne({_id:req.params._id})
    res.send({result:"done",message:"Record is Deleted"})
    }
   else
   res.status(500).send({result:"Fail",message:"Data not found."})
  }
  catch(error){
  res.status(500).send({result:"Fail",message:"Internal Server Error."})
  }
}

module.exports=[create,get,updatedata,deletedata,getSingleData]
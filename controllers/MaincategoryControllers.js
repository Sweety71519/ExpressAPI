const MainCategory = require("../models/maincategory")


async function create(req,res){
    try{
      var data=new MainCategory(req.body)
      console.log("data--1",data);
      await data.save()
      res.send({result:"done",message:"maincategory Record is created",data:data})
    }
    catch(error){
      if(error.keyValue){
      console.log("data--1");
      res.status(400).send({result:"Fail",message:"Maincategory must be unique"})
      }
    else if(error.errors.name){
      console.log("data--3");
      res.status(400).send({result:"Fail",message:error.errors.name.value})

    }
    else
    res.status(500).send({result:"Fail",message:"Internal Server Error."})
    }
}

async function get(req,res){
  try{
    var data= await MainCategory.find().sort({_id:-1})
   res.send({result:"done",count:data.length,data:data})
  }
  catch(error){

  res.status(500).send({result:"Fail",message:"Internal Server Error."})
  }
}

async function getSingleData(req,res){
  try{
    var data= await MainCategory.findOne({_id:req.params._id})
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
    var data= await MainCategory.findOne({_id:req.params._id})
    console.log("data",data);
    if(data)
    {
    data.name=req.body.name ?? data.name
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
    var data= await MainCategory.findOne({_id:req.params._id})
    if(data)
    {
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
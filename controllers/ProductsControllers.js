const Product = require("../models/Product")
const fs=require("fs")


async function create(req,res){
    try{
      var data=new Product(req.body)
      console.log("data--1",req.files.pic1[0].filename);
      if(req.files.pic1){
        data.pic1=req.files.pic1[0].filename
      }
      if(req.files.pic2){
        data.pic2=req.files.pic2[0].filename
      }
      if(req.files.pic3){
        data.pic3=req.files.pic3[0].filename
      }
      if(req.files.pic4){
        data.pic4=req.files.pic4[0].filename
      }
      await data.save()
      res.send({result:"done",message:"Product Record is created",data:data})
    }
    catch(error){
     if(error.errors.name){
     console.log("data--name",error.errors.name);
      res.status(400).send({result:"Fail",message:error.errors.name.value})
     }
      else if(error.errors.maincategory)
      res.status(400).send({result:"Fail",message:error.errors.maincategory.value})
      else if(error.errors.subcategory)
      res.status(400).send({result:"Fail",message:error.errors.subcategory.value})
      else if(error.errors.brandname)
      res.status(400).send({result:"Fail",message:error.errors.brandname.value})
      else if(error.errors.size)
      res.status(400).send({result:"Fail",message:error.errors.size.value})
      else if(error.errors.color)
      res.status(400).send({result:"Fail",message:error.errors.color.value})
      else if(error.errors.total)
      res.status(400).send({result:"Fail",message:error.errors.total.value})
      else if(error.errors.baseprice)
      res.status(400).send({result:"Fail",message:error.errors.baseprice.value})
      else if(error.errors.finalprice)
      res.status(400).send({result:"Fail",message:error.errors.finalprice.value})
      else if(error.errors.discount)
      res.status(400).send({result:"Fail",message:error.errors.discount.value})
      else if(error.errors.qty)
      res.status(400).send({result:"Fail",message:error.errors.qty.value})
    else{
    console.log("data--3",data);
    res.status(500).send({result:"Fail",message:"Internal Server Error."})
    }
    }
}

async function get(req,res){
  try{
    var data= await Product.find().sort({_id:-1})
   res.send({result:"done",count:data.length,data:data})
  }
  catch(error){

  res.status(500).send({result:"Fail",message:"Internal Server Error."})
  }
}

async function getSingleData(req,res){
  try{
    var data= await Product.findOne({_id:req.params._id})
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
    var data= await Product.findOne({_id:req.params._id})
    console.log("data",data);
    if(data)
    {
    data.name=req.body.name ?? data.name
    data.maincategory=req.body.maincategory ?? data.maincategory
    data.subcategory=req.body.subcategory ?? data.subcategory
    data.brandname=req.body.brandname ?? data.brandname
    data.color=req.body.color ?? data.color
    data.size=req.body.size ?? data.size
    data.baseprice=req.body.baseprice ?? data.baseprice
    data.total=req.body.total ?? data.total
    data.discount=req.body.discount ?? data.discount
    data.discription=req.body.discription ?? data.discription
    data.finalprice=req.body.finalprice ?? data.finalprice
    data.qty=req.body.qty ?? data.qty
    data.stock=req.body.stock ?? data.stock
    try {
      if(req.files.pic1){
        fs.unlinkSync("public/uploads/products"+data.pic1)
      }
      data.pic1=req.files.pic1[0].filename
    } catch (error) {}
    try {
      if(req.files.pic2){
        fs.unlinkSync("public/uploads/products"+data.pic2)
      }
      data.pic2=req.files.pic2[0].filename
    } catch (error) {}
    try {
      if(req.files.pic3){
        fs.unlinkSync("public/uploads/products"+data.pic3)
      }
      data.pic3=req.files.pic3[0].filename
    } catch (error) {}
    try {
      if(req.files.pic4){
        fs.unlinkSync("public/uploads/products"+data.pic4)
      }
      data.pic4=req.files.pic4[0].filename
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
    var data= await Product.findOne({_id:req.params._id})
    if(data)
    {
      try {
        if(req.files.pic1){
          fs.unlinkSync("public/uploads/products"+data.pic1)
        }
      } catch (error) {}
      try {
        if(req.files.pic2){
          fs.unlinkSync("public/uploads/products"+data.pic2)
        }
      } catch (error) {}
      try {
        if(req.files.pic3){
          fs.unlinkSync("public/uploads/products"+data.pic3)
        }
      } catch (error) {}
      try {
        if(req.files.pic4){
          fs.unlinkSync("public/uploads/products"+data.pic4)
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
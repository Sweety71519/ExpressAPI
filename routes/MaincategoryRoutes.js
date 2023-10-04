const router=require("express").Router()
const [create,get,updatedata,deletedata,getSingleData] =require("../controllers/MaincategoryControllers")

router.post("/",create)
router.get("/", get)
router.put("/:_id",updatedata)
router.get("/:_id",getSingleData)
router.delete("/:_id",deletedata)

module.exports=router
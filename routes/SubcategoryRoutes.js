const router=require("express").Router()
const [create,get,update,deletedata,getSingleData] =require("../controllers/SubcategoryControllers ")

router.post("/",create)
router.get("/",get)
router.put("/:_id",update)
router.get("/:_id",getSingleData)
router.delete("/:_id",deletedata)

module.exports=router
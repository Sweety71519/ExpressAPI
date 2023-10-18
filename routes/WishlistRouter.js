const router=require("express").Router()

const [create,deletedata,get,getSingleData,updatedata] = require("../controllers/WishlistController")

router.post("/",create)
router.get("/",get)
router.get("/:_id",getSingleData)
router.put("/:_id",updatedata)
router.delete("/:_id",deletedata)

module.exports=router


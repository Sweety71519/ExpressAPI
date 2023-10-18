const router=require("express").Router()
const multer =require("multer")
const [create,get,update,deletedata,getSingleData] =require("../controllers/UserControllers ")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/users')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + 
      cb(null, Date.now()+file.originalname)
    },
    size:10485760 //10 MB
  })
  
  const upload = multer({ storage: storage })

router.post("/",create)
router.get("/",get)
router.put("/:_id",upload.single('pic'),update)
router.get("/:_id",getSingleData)
router.delete("/:_id",deletedata)

module.exports=router
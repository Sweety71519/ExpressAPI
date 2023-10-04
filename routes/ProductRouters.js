const router=require("express").Router()
const multer =require("multer")
const [create,get,update,deletedata,getSingleData] =require("../controllers/ProductsControllers")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/products')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + 
      cb(null, Date.now()+file.originalname)
    },
    size:10485760 //10 MB
  })
  
  const upload = multer({ storage: storage })

router.post("/",upload.fields([
    {name:"pic1",maxCount:1},
    {name:"pic2",maxCount:1},
    {name:"pic3",maxCount:1},
    {name:"pic4",maxCount:1}
]  
),create)
router.get("/",get)
router.put("/:_id",upload.fields([
    {name:"pic1",maxCount:1},
    {name:"pic2",maxCount:1},
    {name:"pic3",maxCount:1},
    {name:"pic4",maxCount:1}
]  
),update)
router.get("/:_id",getSingleData)
router.delete("/:_id",deletedata)

module.exports=router
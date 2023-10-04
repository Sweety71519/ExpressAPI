const router=require("express").Router()

const MaincategoryRoutes =require("./MaincategoryRoutes")
const SubcategoryRoutes =require("./SubcategoryRoutes")
const BrandRoutes =require("./BrandRouters")
const ProductRoutes =require("./ProductRouters")

router.use("/maincategory",MaincategoryRoutes) 
router.use("/subcategory",SubcategoryRoutes)
router.use("/brand",BrandRoutes)
router.use("/product",ProductRoutes)

module.exports =router

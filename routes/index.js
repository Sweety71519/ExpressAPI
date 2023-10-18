const router =require("express").Router()

const MaincategoryRoutes =require("./MaincategoryRoutes")
const SubcategoryRoutes =require("./SubcategoryRoutes")
const BrandRoutes =require("./BrandRouters")
const ProductRoutes =require("./ProductRouters")
const UserRoutes =require("./UserRouters")
const CartRoutes =require("./CartRouters")
const WishlistRoutes =require("./WishlistRouter")
const ContactUsRoutes =require("./ContactUsRouter")


router.use("/maincategory",MaincategoryRoutes) 
router.use("/subcategory",SubcategoryRoutes)
router.use("/brand",BrandRoutes)
router.use("/product",ProductRoutes)
router.use("/user",UserRoutes)
router.use("/cart",CartRoutes)
router.use("/wishlist",WishlistRoutes)
router.use("/contactus",ContactUsRoutes)

module.exports =router

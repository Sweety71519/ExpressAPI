const express=require("express")
require("./db_connection")

const router =require("./routes")


const app=express()
app.use(express.json())

app.use("/api",router )
app.use(express.static("public"))

app.listen(8000,console.log("server is running at http://localhost:8000"))
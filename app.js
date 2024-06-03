console.log("app.js top")
const express = require("express")
const app=express()
const {connect} = require("mongoose")
require("dotenv").config()
const cors=require("cors")
const morgan=require("morgan")
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
const userRoutes = require("./routes/userRoutes");


app.listen(7456,async()=>{
    console.log("server running at given port number.")
    try{
        await connect(process.env.MONGODB_URI)
        console.log("connected to mongodb database")
    }catch(error){
        console.log(error.message)
    }
})

app.use("/worko/user", userRoutes);
console.log("app.js bottom")

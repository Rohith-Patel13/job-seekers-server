const express = require("express")
const app=express()
const {connect} = require("mongoose")
require("dotenv").config()
const cors=require("cors")
const morgan=require("morgan")
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.listen(7456,async()=>{
    console.log("server running at given port number.")
    try{
        await connect(process.env.MONGODB_URI)
        console.log("connected to mongodb database")
    }catch(error){
        console.log(error.message)
    }
})

//Delete from code after using below url:
// https://chatgpt.com/c/cdc01684-eddd-4cfc-bd5f-2e8e5d71aa7d

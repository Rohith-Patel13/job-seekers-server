const express = require("express")
const app=express()
const {connect} = require("mongoose")
require("dotenv").config()
const cors=require("cors")
app.use(express.json())
app.use(cors())

app.listen(7456,()=>{
    console.log("server running at given port number.")
    try{
        connect(process.env.MONGODB_URI)
        console.log("connected to mongodb database")
    }catch(error){
        console.log(error.message)
    }
})

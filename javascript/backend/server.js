console.log("hy")
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
const app=express()
dotenv.config()
const port=process.env.PORT ||3000

const database="mongodb://localhost:27017/Form"
//middlewares
app.use(express.json())
mongoose.connect(database)
.then(()=>{
    app.listen(()=>{
        console.log(`server is running on port ${port}`)
        console.log("database connected succesfully")
    })
})
.catch((error)=>{
console.log(error.message)
})
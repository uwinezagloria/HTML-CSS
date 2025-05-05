import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    }
})
const userModel=mongoose.model('users',userSchema)
export default  userModel
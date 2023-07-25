const mongoose=require("mongoose")

const ClientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:false
    }
})

const CLientModel = mongoose.model("clients", ClientSchema)

module.exports = CLientModel;
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
    birthdate:{
        type: String,
        required: true,
        default: Date
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
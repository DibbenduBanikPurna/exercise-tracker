//external import
const mongoose=require('mongoose')

//create  exerciseSchema
const exerciseSchema=mongoose.Schema({

    userName:{
        type:String,
        required:true,
        trim:true,
        minlength:3
    },
        description:{
            type:String,
            required:true,
            trim:true

        },
        duration:{
            type:Number,
            required:true
        },
        date:{
            type:Date,
          
            default:Date.now
        }
    
},{
    timestamps:true
})


//create db collection name
const Exercise= new mongoose.model("Exercise", exerciseSchema)


module.exports=Exercise;
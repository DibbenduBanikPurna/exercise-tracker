const mongoose=require('mongoose')

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

const Exercise= new mongoose.model("Exercise", exerciseSchema)


module.exports=Exercise
const mongoose=require('mongoose')


const UserSchema=mongoose.Schema({

    userName:{
        type:String,
        required:true,
        trim:true,
        minlenght:3,
        unique:true

    },

},{
    timestamps:true
})

const User=new mongoose.model("User",UserSchema)

module.exports=User;
//external import
const mongoose=require('mongoose')

//create userSchema
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

//create db collection
const User=new mongoose.model("User",UserSchema)

module.exports=User;
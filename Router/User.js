const express=require('express')

const userRouter=express.Router();

const User=require('../Model/UserModel')

userRouter.get('/',async(req,res)=>{
    try{
    const data=await User.find({},{__v:0})
       res.status(200).json({
            data,
       }) 
    
    }
    catch(err){
        console.log(err.message)
        res.status(500).json({
            Error:err.message
        })
    }



})

userRouter.post('/', async (req,res)=>{

   
    try{

    const user= new User(req.body)

    await user.save()

    res.status(200).json({
        Success:"Data Added Successfully"
    })
        

    

    }
   
    catch(err){
        console.log(err.message)
        res.status(500).json({
            Error:err.message
        })
    }


});

module.exports=userRouter;
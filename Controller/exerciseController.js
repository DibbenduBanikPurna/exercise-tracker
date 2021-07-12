//internal db collection import
const Exercise=require('../Model/ExerciseModel')

//get data functionality
const getExercise=(async (req,res,next)=>{
    try{
        const data=await Exercise.find({},{__v:0})
 
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

//get single data functionality
const singleExercise=(async (req,res,next)=>{

    try{
        const data=await Exercise.findOne({_id:req.params.id})
            if(data===null){
                throw new Error("sorrry no content found")
               
            }
            else{
    
        res.status(200).json({
            data,
        })
    }
        
    }
    catch(err){
        console.log(err.message)
        res.status(500).json({
            Error:err.message
        })
    }
})

//update single data functionality
const upadateExercise=(async (req,res,next)=>{
    try{
        const data=await Exercise.updateOne({_id:req.params.id},{
            userName:req.body.userName,
            description:req.body.description,
            duration:req.body.duration,
            date:req.body.date
        })

    res.status(200).json({
        success:"updated-Successfully"
    })
}
    catch(err){
        console.log(err)
        res.status(500).json({
            Error:err.message
        })

    }
})

//delete single data functionality
const deleteExercise=(async (req,res,next)=>{
    try{
        await Exercise.deleteOne({_id:req.params.id})
        res.status(200).json({
            Success:"Deleted Successfully"
        })

    }
    catch(err){
        console.log(err)
        res.status(500).json({
            Error:err.message
        })

    }
})

//add single data functionality
const addExercise=(async (req,res,next)=>{
    try{
                //console.log(req.body)
            const exercise=new Exercise(req.body)
            await exercise.save()
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
})


module.exports={ getExercise,singleExercise,upadateExercise,deleteExercise,addExercise}
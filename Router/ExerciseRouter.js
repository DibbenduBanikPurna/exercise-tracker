//external import
const express=require('express')


//internal import
const {getExercise, singleExercise, upadateExercise, deleteExercise, addExercise} = require('../Controller/exerciseController')

//import db collection
const Exercise=require('../Model/ExerciseModel')

//call the express
const exerciseRouter=express.Router()

//get all data
exerciseRouter.get('/', getExercise )
   
//add new data
 exerciseRouter.post('/', addExercise )

//get single data
exerciseRouter.get('/:id', singleExercise)

//update single data
exerciseRouter.put('/:id', upadateExercise)

//delete single data
exerciseRouter.delete('/:id', deleteExercise)
   

module.exports=exerciseRouter;
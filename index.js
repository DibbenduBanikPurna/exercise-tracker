//external import
const express=require('express')
const cors=require('cors')
const body_parser=require('body-parser')
const dotenv=require('dotenv')
const mongoose=require('mongoose')


//internal import
const userRouter = require('./Router/UserRouter')
const exerciseRouter = require('./Router/ExerciseRouter')


//create web server
const app=express()

//env call
dotenv.config()

//database connection
mongoose.connect(process.env.DATABASE_CONNECTION_STRING,{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true})
.then(res=>console.log("Database connected"))
.catch(err=>console.log(err))

//parse data
app.use(express.json())
app.use(cors())
app.use(body_parser.json())
app.use(express.urlencoded({extended:true}))


//router set up

app.use('/user', userRouter)

app.use('/exercise',exerciseRouter)


//server root page
app.get('/',(req,res)=>{
    res.send("welcome to my server")
})



//error handelling middleware
app.use((err,req,res,next)=>{
    console.log(err.message)
    res.status(500).send(err.message)

})




//server starting port

app.listen(process.env.PORT,()=>{
    console.log(`i am listen at ${process.env.PORT}`)
})
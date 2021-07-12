//external import
const express=require('express')
const cors=require('cors')
const body_parser=require('body-parser')
const dotenv=require('dotenv')
const mongoose=require('mongoose')


//internal import
const userRouter = require('./Router/User')
const exerciseRouter = require('./Router/Exercise')


//create web server
const app=express()
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


app.get('/',(req,res)=>{
    res.send("welcome to my server")
})


app.use((err,req,res,next)=>{
    console.log(err.message)
    res.status(500).send(err.message)

})

//server port

app.listen(process.env.PORT,()=>{
    console.log(`i am listen at ${process.env.PORT}`)
})
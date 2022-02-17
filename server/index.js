const express = require('express')
const app= express()
const cors = require('cors')
const mongoose = require('mongoose') 
const bodyParser = require("body-parser")
//const jwt = require('jsonwebtoken')
const User = require('./models/userModel')
//const bcrypt = require('bcryptjs')
//although mongoose.connect returns a promise but mongoose internally queues the things to do yet if the connection is not ready yet
mongoose.connect('mongodb://localhost:27017/shg',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}) //if shg-database doesnot preexist then mongodb will create one

//middleware
app.use(cors()) //to prevent any sort of cross-origins error

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(express.json()) //to led the server know that we are taking data from client in the form of json

app.get('/hello',(req,res)=> {
    res.send('hello world')
})
app.post('/api/register', async (req,res)=>{
   console.log(req.body)
    try{
        //const newPassword = await bcrypt.hash(req.body.password,10)
        const user= await new User({
            'name': req.body.name,
            'email': req.body.email,
            //'password': newPassword,
            'password': req.body.password,
        });
        user.save();
        res.json({status:'ok',user: user})
    }catch(err){
      
        res.json({status:'error',error: err.message})
    }
})
app.post('/api/login', async (req,res)=>{
    try{
        const user = await User.findOne({
            'email': req.body.email,
            'password': req.body.password,
        })
        if(!user){
            return {status:'error', error: 'Invalid login'}
        }
       // const isPasswordValid = await bcrypt.compare(req.body.password,user.password)
        //if(isPasswordValid){
            if(user){
            //const token = jwt.sign({
            //    'name': user.name,
            //    'email': user.email,
            //},'secret@1#2*3')
            return res.json({status:'ok', user: user.name})
        }else{
            return res.json({status:'error',error: 'invalid credentials'})
        }
    }catch(err){
        res.json({status:'error',error: 'something is wrong'})
    }
})

app.get('/api/userName',async (req,res)=>{
    //const token = req.headers['x-access-token']
   
    try{
       // const decoded = jwt.verify(token,'secret123')
       // const email = decoded.email
       const email = req.body.email
        const user = await User.findOne({email: email})

        return{status: 'ok', name: user.name}
    }catch(error){
        console.log(error)
        res.json({status: 'error',error: 'invalid token'})
    }

})
app.listen(1337,()=>{
    console.log('server started on port no. 1337')
})
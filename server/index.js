const express=require( 'express');
const cors=require('cors');
const bodyparse=require('body-parser');
const userRoutes = require('./routes/userroutes');
const db = require('./config/db');
const app=express();


app.use(cors());
app.use(bodyparse.json());

app.use((req, res, next) => {
    req.db = db;
    next();
    });

app.use('/users', userRoutes);

app.get('/user',(req,res)=>{
    console.log("userssss")
})
app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})
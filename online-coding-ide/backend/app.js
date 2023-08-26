//Entry File
// const express = require ('express');
import express from "express";
import {userRoutes} from '../backend/routes/user-routes.js';
import  {ideRoutes} from '../backend/routes/ide-routes.js';
const app= express();
app.use(express.json())
app.use('/',userRoutes);
app.use('/',ideRoutes);
app.use((request, response,next)=>{
    response.json({message:'Invalid URL'})
})
const server=app.listen(1234,(err)=>{
    if(err){
        console.log('server crash',err);

    }
    else{
        console.log('Server Up and Running',server.address().port);
    }
})
const url = "mongodb+srv://sam1234:<password>@cluster0.l7avja2.mongodb.net/?retryWrites=true&w=majority";
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const {generateHash} = require("./utility");
const cors = require('cors')
const app =express();
const userModel = require('./schema');
const bcrypt = require("bcryptjs");
const salt=10;
const cors = require('cors');
require('dotenv').config();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.listen(5006,()=>{
    console.log('server running at 5006 port');
});
mongoose.connect('mongodb://localhost/JWT',()=>{
    console.log('connected to DB')
}),(err)=>console.log(err);
app.post("/",(req, res)=> {
        generateHash(req.body.text).then((textHash)=> {
            userModel.create({text: textHash,expiry: req.body.expiry})
                            .then(()=> { 
                                res.status(200).send(`new text added successfully`); 
                            }).catch((err)=> {
                                res.status(400).send("try again")
            })
        });
    }
    
);
app.get("/posts",(req,res)=>{
    postModal.find().then((data)=>{
        res.status(200).send(data.text)
        
    }).catch((err)=>{
        res.status(400).send(err)
    })
})
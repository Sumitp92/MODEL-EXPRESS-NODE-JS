const express = require('express');
const path = require('path');
const rootDir=require('../util/path');
const route = express.Router();


route.get('/contactUs',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contactUs.html'));
})

route.post('/success',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','successfull.html'));
})

module.exports=route;
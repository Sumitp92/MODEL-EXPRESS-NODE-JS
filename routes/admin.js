const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

router.get('/ap',(req, res, next)=>{
    
    res.sendFile(path.join(rootDir,'views','addproduct.html'));
    
  
});

router.post('/product',(req, res, next)=>{
    
    res.sendFile(path.join(__dirname,'../','views','productAdded.html'));
    
});


module.exports=router;
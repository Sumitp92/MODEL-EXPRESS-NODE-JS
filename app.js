const path = require('path');
const express = require('express');
const http =require('http');
const bodyParser=require('body-parser');
const app = express();

const contactUs=require('./routes/contactUs');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/contact',contactUs);
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);


app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'./','views','404.html'));
})

app.listen(3000);
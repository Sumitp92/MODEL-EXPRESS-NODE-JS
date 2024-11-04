const path = require('path');
const express = require('express');
const http =require('http');
const bodyParser=require('body-parser');
const errors =require('./controllers/NotFound');
const app = express();

const contactUs=require('./routes/contactUs');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/contact',contactUs);
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);


app.use(errors.Error);

app.listen(3000);
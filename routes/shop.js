const express = require('express');
const route = express.Router();
const shop = require('../controllers/products')


route.get('/',shop.shop);


module.exports=route;
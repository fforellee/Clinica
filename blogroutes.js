const MongoClient = require('./database');
const path = require('path');
const express = require('express');
const router = express.Router();


router.get('/post',(req,res)=>{
    res.render(__dirname+("/root/index.ejs"));
});

router.get('/',(req,res)=>{
    res.render(__dirname+("/views/index.ejs"),{data:{userQuery:['book']}});
});

module.exports = router;
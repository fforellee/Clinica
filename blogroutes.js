const path = require('path');
const express = require('express');
const router = express.Router();


router.get('/post',(req,res)=>{
    res.render(__dirname+("/root/index.ejs"));
});

router.get('/',(req,res)=>{
    res.render(__dirname+("/root/index.ejs"));
});

module.exports = router;
const bodyparser = require('body-parser');
const MongoClient = require('./database');
const path = require('path');
const express = require('express');
const router = express.Router();

// const MongoClient = require('mongodb').MongoClient;
// const db = "blogpost"
// const url = "mongodb://localhost:27017/";

var urlEncodedParser = bodyparser.urlencoded({extended:false});


router.post('/post',urlEncodedParser,(req,res)=>{
    var titulo = req.body.title;
    var corpo = req.body.body;
    var data = Date.now();
    MongoClient.add_post(titulo,corpo,data);
    res.render(__dirname+("/views/blog.ejs"),{data:{message:[titulo,corpo]}});
});

router.get('/blog',(req,res)=>{
    // MongoClient.blog_post();
    res.render(__dirname+("/views/index.ejs"),{data:{posts:[MongoClient.blog_post()]}});
    console.log(typeof posts);
});

router.get('/',(req,res)=>{
    res.render(__dirname+("/views/index.ejs"),{data:{userQuery:['book']}});
});

router.get('/contato',(req,res)=>{
    res.render(__dirname+("/views/index.ejs"),{data:{userQuery:['book']}});
});

module.exports = router;
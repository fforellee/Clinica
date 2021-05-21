const express = require('express');
const app = express();
const port = 7000;

app.use(express.urlencoded());
app.use(express.json());

app.get('/index',(req,res)=>{
    res.sendFile(__dirname+'/root/index.html')
});

app.post('/form',(req,res)=>{
    console.log(req.body.user.name)
    console.log(req.body.user.email)
});
            
const server = app.listen(port, ()=>{
    console.log('running server at '+port);
});
const express = require('express');
const app = express();
const port = 7000;
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: "Park Lane 38" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 

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
const MongoClient = require('mongodb').MongoClient;
const db = "blogpost"
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("blogpost");
  var query = { cidades: "saopaulo" };
  dbo.collection("posts").find().toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 

exports.modules = MongoClient;
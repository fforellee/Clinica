const MongoClient = require('mongodb').MongoClient;
const db = "blogpost"
const url = "mongodb://localhost:27017/";

module.exports ={

blog_post : function blog_post(){
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("blogpost");
  dbo.collection("posts").find().toArray(function(err, result) {
    if (err) throw err;
    db.close();
    console.log(result);
    return result;
  });
}); 
},

add_post : function add_post(titulo,corpo,data){
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("blogpost");
  var query = { titulo: titulo,corpo:corpo,data:data};
  dbo.collection("posts").insert(query);
}); 
},

delete_post : function delete_post(){
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
},

};
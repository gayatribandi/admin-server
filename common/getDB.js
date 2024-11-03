
var mongo=require('mongodb')

async function getDB(){

  var url="mongodb+srv://gbnit:gbnit@gb7amcluster.l858b.mongodb.net/"
  var mongoClient=mongo.MongoClient;
  var server=await mongoClient.connect(url)
  var db=server.db("nit")
  return db
}

module.exports=getDB
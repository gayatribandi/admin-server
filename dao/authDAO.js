
var mongodb=require('mongodb')
async function loginDAO(data){
  //connect with db
  try
  {
    var url="mongodb+srv://gbnit:gbnit@gb7amcluster.l858b.mongodb.net/"
  var mongoClient = mongodb.MongoClient
  const server=await mongoClient.connect(url)
  var db=server.db('nit')
  var collection=db.collection('admin')
  var result=await collection.find(data).toArray()
  return result;


  //server -install db software -run- database-collections-document
  //server -install db s/w -run-database-tables-rows

  }
  catch(ex){

  }finally
  {
    
  }


}


module.exports=loginDAO;
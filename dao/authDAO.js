
var mongodb=require('mongodb');
const getDB = require('../common/getDB');
async function loginDAO(data){
  //connect with db
  try
  {
    var db=await getDB()
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
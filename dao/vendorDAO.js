

const getDB = require('../common/getDB');

var mongo=require('mongodb')
var ObjectId=mongo.ObjectId

async function saveVendorDAO(data){
 
  var db=await getDB()
  var collection=db.collection('vendors')
  var result=await collection.insertOne(data)
  return result;
}

async function getVendorDAO(){
    var db=await getDB()
    var collection=db.collection("vendors")
    var result=await collection.find({}).toArray()
    return result;
}

async function updateVendorDAO(data,id){
  var db=await getDB()
  var collection =db.collection("vendors")
  var result =await collection.updateOne({_id:ObjectId.createFromHexString(id)},{$set:data})
  return result;
}

async function deleteVendorDAO(id){
    var db=await getDB()
    var collection=db.collection('vendors')
    var result=await collection.deleteOne({_id:ObjectId.createFromHexString(id)})
    return result;
}


module.exports={
  saveVendorDAO,
  updateVendorDAO,
  deleteVendorDAO,
  getVendorDAO
}
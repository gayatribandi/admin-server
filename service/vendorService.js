
var {saveVendorDAO,getVendorDAO,updateVendorDAO, deleteVendorDAO}=require('../dao/vendorDAO')

async function saveVendorService(req){
  var data=req.body.data
  var result=await saveVendorDAO(data)
  return result;

}

async function getVendorService(){
  var result=await getVendorDAO();
  return result;
}

async function updateVendorService(req){

  var data=req.body.data
  var id=req.query.id
  var result=await updateVendorDAO(data,id)
  return result;

}

async function deleteVendorService(req){
  var id=req.params.id
  var result=await deleteVendorDAO(id)
  return result;
}


module.exports={
  saveVendorService,
  updateVendorService,
  deleteVendorService,
  getVendorService
}
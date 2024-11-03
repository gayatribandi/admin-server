var express=require('express')
var router=express.Router()

var {saveVendorService,getVendorService,updateVendorService, deleteVendorService}=require('../service/vendorService')


router.post('/save',async function(req,res,next){
  try{
    var result=await saveVendorService(req)
    res.send(result)
  }catch(ex){
    res.send(ex?.message)
  }finally{

  }
 
})

router.put('/update',async function(req,res,next){
  try{
    const result=await updateVendorService(req)
    res.send(result)
  }catch(ex){
    res.send(ex?.message)
  }  
})

router.get('/get',async function(req,res,next){
   try{
    var result=await getVendorService()
    res.send(result)
   }catch(ex){
    res.send(ex?.message)
   }
})

router.delete('/delete/:id',async function(req,res,next){
  try{
    var result=await deleteVendorService(req)
  res.send(result)
  }catch(ex){
    res.send(ex?.message)
  }
})





module.exports=router;
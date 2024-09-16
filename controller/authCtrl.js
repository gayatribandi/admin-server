var express=require('express')
var router=express.Router()
const loginService=require('../service/authService')

router.post("/login",async function(req,res,next){
  const result=await loginService(req)
  res.send(result)
})

// url: http://localhost:2020/auth/login
// method: post



module.exports=router;
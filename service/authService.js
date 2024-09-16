const loginDAO=require('../dao/authDAO')

async function loginService(req){
  const data=req.body.data
  const result=await loginDAO(data)
  return result;
}




module.exports = loginService
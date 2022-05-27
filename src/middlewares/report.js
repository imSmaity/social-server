const express=require('express')
const route=express.Router()

route.post('/',async (req,res)=>{
    
    res.json({success:true})
})

module.exports=route;
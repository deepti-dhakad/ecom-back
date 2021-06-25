var express = require('express');
var router = express.Router();
var pool=require('./pool')

router.get('/displayAll',function(req,res){
    pool.query("select * from tracking",function(error,result){
     if(error)
     {
       return res.status(500).json([])
     }
     else
     {
       return res.status(200).json(result)
     }
    
    })
  })

 router.post('/trackdate',function(error,result){
   pool.query('select * from tracking  where tdate between ? and ? '[req.body.tdate],function(error,result){
    if(error)
    { return res.status(500).json([])}
    else{
        return res.status(200).json(result)

    }
   })
 })
  






    
    
    
    module.exports=router;
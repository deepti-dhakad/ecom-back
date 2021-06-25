var express = require('express');
var router = express.Router();
var pool=require('./pool')
//var upload=require('./multer')
/* GET home page. */
router.post('/productSubmit', function(req, res, next) {
   // console.log(req.body)
   pool.query('insert into products(productname,price,quantity)values(?,?,?)',[req.body.productname,req.body.price,req.body.quantity],function(error,result){
    if(error)
       {console.log(error)
       return res.status(500).json({'RESULT':false})}
    else{
        console.log(result)
        return res.status(200).json({'RESULT':true})

    }


   }) 
  });


  router.get('/displayAllProduct',function(req,res){
    pool.query("select * from products",function(error,result){
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
    router.post('/productDelete', function(req, res, next) {
      pool.query('delete from products where productid=?',[req.body.productid],function(error,result){
       if(error)
       { return res.status(500).json({'RESULT':false})}
       else{
           return res.status(200).json({'RESULT':true})
    
       }
    
    
      }) 
     });
     router.post('/productEdit', function(req, res, next) {
      pool.query('update  category set categoryname=?, description=?, adstatus=?  where categoryid=?',[req.body.categoryname,req.body.categorydescription,req.body.adstatus,req.body.categoryid],function(error,result){
       if(error)
       {  console.log(error)
         return res.status(500).json({'RESULT':false})}
       else{
           return res.status(200).json({'RESULT':true})
    
       }
    
    
      }) 
     });
    
    
    
module.exports=router;
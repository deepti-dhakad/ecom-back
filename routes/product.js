var express = require('express');
var router = express.Router();
var pool=require('./pool')
var upload=require('./multer')
/* GET home page. */
router.post('/productSubmit',upload.any(), function(req, res, next) {
   pool.query('insert into product(categoryid,brandid,modelid,productname,description,price,picture,offerprice,delivery,ratings,color,ad,adstatus,offertype,stock)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[req.body.categoryid,req.body.brandid,req.body.modelid,req.body.productname,req.body.description,req.body.price,req.files[0].originalname,req.body.offerprice,req.body.delivery,req.body.ratings,req.body.color,req.files[1].originalname,req.body.adstatus,req.body.offertype,req.body.stock],function(error,result){
    if(error)
    { console.log(error)
        return res.status(500).json({'RESULT':false})}
    else{
        console.log(result)
        return res.status(200).json({'RESULT':true})

    }


   }) 
  });

  router.post('/updatePicture',upload.any(), function(req, res, next) {
    pool.query('update product set picture=? where productid=?',[req.files[0].originalname,req.body.productid],function(error,result){
     if(error)
     { return res.status(500).json({'RESULT':false})}
     else{
         return res.status(200).json({'RESULT':true})
 
     }
 
 
    }) 
   });
 
 router.post('/fetchproductid',function(req,res,next){
    pool.query("select * from product where modelid=?",[req.body.modelid],function(error,result){
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
   router.post('/editad',upload.any(), function(req, res, next) {
    pool.query('update product set ad=? where productid=?',[req.files[0].originalname,req.body.productid],function(error,result){
     if(error)
     { return res.status(500).json({'RESULT':false})}
     else{
         return res.status(200).json({'RESULT':true})
 
     }
 
 
    }) 
   });
 
 


  router.get('/displayAllProduct',function(req,res){
pool.query("select * from product",function(error,result){
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

router.get('/fetchproductbyid/:pid',function(req,res){
  pool.query("select * from product where productid=?",[req.params.pid],function(error,result){
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
  

router.post('/deleteProduct', function(req, res, next) {
  pool.query('delete from product where productid=?',[req.body.productid],function(error,result){
   if(error)
   { return res.status(500).json({'RESULT':false})}
   else{
       return res.status(200).json({'RESULT':true})

   }


  }) 
 });

 router.post('/updateProduct', function(req, res, next) {
  pool.query('update  product set categoryid=?,brandid=?,modelid=?,productname=?,description=?,price=?,offerprice=?,delivery=?,ratings=?,color=?,adstatus=?,offertype=?,stock=? where productid=?',[req.body.categoryid,req.body.brandid,req.body.modelid,req.body.productname,req.body.description,req.body.price,req.body.offerprice,req.body.delivery,req.body.ratings,req.body.color,req.body.adstatus,req.body.offertype,req.body.stock,req.body.productid],function(error,result){
   if(error)
   {  console.log(error)
     return res.status(500).json({'RESULT':false})}
   else{
       return res.status(200).json({'RESULT':true})

   }


  }) 
 });
 
 router.get('/fetchProductByDiscount',function(req,res,next){
  pool.query("select * from product where offertype='Discounted'",function(error,result){
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
router.post('/fetchbrandbyid',function(req,res,next){
  console.log(req.body)
  pool.query("select * from product where brandid=?",[req.body.brandid],function(error,result){
    if(error){
      console.log(error)
      return res.status(500).json([])
    }
    else{
      console.log(result)
      return res.status(200).json(result)
    }
  })
})
module.exports = router;

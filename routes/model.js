var express = require('express');
var router = express.Router();
var pool=require('./pool')
var upload=require('./multer')
/* GET home page. */
router.post('/modelSubmit',upload.any(), function(req, res, next) {
   pool.query('insert into model(brandid,modelname,description)values(?,?,?)',[req.body.brandid,req.body.modelname,req.body.description],function(error,result){
    if(error)
    { return res.status(500).json({'RESULT':false})}
    else{
        return res.status(200).json({'RESULT':true})

    }


   }) 
  });

  router.post('/editcategoryicon',upload.any(), function(req, res, next) {
    pool.query('update category set icon=? where categoryid=?',[req.files[0].originalname,req.body.categoryid],function(error,result){
     if(error)
     { return res.status(500).json({'RESULT':false})}
     else{
         return res.status(200).json({'RESULT':true})
 
     }
 
 
    }) 
   });
 
 router.post('/fetchmodels',function(req,res,next){
    pool.query("select * from model where brandid=?",[req.body.brandid],function(error,result){
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
   router.post('/editcategoryad',upload.any(), function(req, res, next) {
    pool.query('update category set ad=? where categoryid=?',[req.files[0].originalname,req.body.categoryid],function(error,result){
     if(error)
     { return res.status(500).json({'RESULT':false})}
     else{
         return res.status(200).json({'RESULT':true})
 
     }
 
 
    }) 
   });
 
 


  router.get('/displayAllModel',function(req,res){
pool.query("select * from model",function(error,result){
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

router.post('/deleteModel', function(req, res, next) {
  pool.query('delete from model where modelid=?',[req.body.modelid],function(error,result){
   if(error)
   { return res.status(500).json({'RESULT':false})}
   else{
       return res.status(200).json({'RESULT':true})

   }


  }) 
 });

 router.post('/updatecategory', function(req, res, next) {
  pool.query('update  category set categoryname=?, description=?, adstatus=?  where categoryid=?',[req.body.categoryname,req.body.categorydescription,req.body.adstatus,req.body.categoryid],function(error,result){
   if(error)
   {  console.log(error)
     return res.status(500).json({'RESULT':false})}
   else{
       return res.status(200).json({'RESULT':true})

   }


  }) 
 });


module.exports = router;

var express = require('express');
var router = express.Router();
var pool=require('./pool')
var upload=require('./multer')
/* GET home page. */
router.post('/dummy',upload.any(), function(req, res, next) {
  
        return res.status(200).json({'RESULT':true})

      });
 router.post('/addProductPicture',upload.any(), function(req, res, next) {
  //console.log(req.body)
  //console.log(req.files)

 var q="insert into productpictures(categoryid,brandid,modelid,productid,description,productpicture)values?"
 pool.query(q,[req.files.map(item=>[req.body.categoryid,req.body.brandid,req.body.modelid,req.body.productid,req.body.description,item.originalname])],function(error,result){
            if(error)
            { return res.status(500).json({'RESULT':false})}
            else{
                return res.status(200).json({'RESULT':true})
        
            }
        
        
           }) 
          });
  router.post('/productpicturedisplaybyid',function(req,res){
  pool.query("select * from productpictures where productid=?",[req.body.productid],function(error,result){
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
            
          
 
  module.exports=router;
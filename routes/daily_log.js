var express = require('express');
var router = express.Router();
var pool=require('./pool')
var multer=require('./multer')

/* GET home page. */

router.post('/addnewrecord',multer.any(''), function(req, res, next) {
//     console.log(req.body)
//   console.log(req.file)
    var body=req.body
    body.photo=req.files[0].filename
    body.image=req.files[1].filename
    var q="insert into daily_log__c set ?"
    
    pool.query(q,[],(err,rslt)=>{
        if(err){
            tres
        }
    })



 // var q="insert into daily_log__c(Assigned_To__c, Beat_Date__c, BUI__c, City__c, Clock_In_LatLang__c, Clock_In_LatLang__Latitude__s,Clock_In_LatLang__Longitude__s,Clock_In_Time__c,Clock_Out_LatLang__c,Clock_Out_LatLang__Latitude__s,Clock_Out_LatLang__Longitude__s,Clock_Out_Time__c,Country__c,CreatedById,CreatedDate,End_LatLang__Latitude__s,End_LatLang__Longitude__s,End_Time__c,Ended__c,Image__c,IsDeleted,Leave__c,Leave_Type__c,Name,OwnerId,Photo_url__c,Start_LatLang__Latitude__s,Start_LatLang__Longitude__s,Start_time__c,Started__c,State__c,Status__c,Total_Distance__c,Total_Hours__c) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
  
  
  var field=[req.body.adhar,
    req.body.active,req.body.annual,req.body.baddress,req.body.bcity,req.body.bcountry,req.body.bgcaccuracy,req.body.blatitude,req.body.blongitude, req.body.bpostal,req.body.bstate,req.body.bstreet,req.body.createdbyid,req.body.createddate,req.body.dealertype,req.body.desc,req.body.email,req.body.empid,req.body.gst,req.body.accname,req.body.noofemp,req.body.outstdamt,req.body.partner,req.body.phone,req.file.originalname,req.body.saddress,req.body.recordid, req.body.scity,req.body.scountry,req.body.sgcaccuracy,req.body.slatitude,req.body.slongitude,req.body.spostal, req.body.sstate,req.body.sstreet,req.body.state,req.body.status,req.body.type,req.body.typeofdealer,req.body.warehouse,req.body.accountno]
  pool.query(q,field,function(err,result){
    if(err){
        console.log("ERROR-")
      console.log(err)
      return res.status(500).json({RESULT:false})
    }
    else{
      console.log(result)
      return res.status(200).json({RESULT:true})
       
    }
  })
});

router.get('/displayall',function(req,res,next){
  pool.query("select * from account",function(err,result){
    if(err){
      console.log(err)
      return  res.status(500).json([])
    }
    else{
      return  res.status(200).json(result)
    }
  })

})

router.post('/deleteRecord',function(req,res,next){
  pool.query("delete from account where Id=?",[req.body.Id],function(err,result){
    if(err){
      return  res.status(500).json([])
    }
    else{
      return  res.status(200).json(result)
    }
  })

})

router.post('/updateRecord',multer.any(), function(req, res, next) {
 
  console.log(req.body)
  if(req.body.photo!=''){
    q="update account set Aadhar_No__c=?,Active__c=?,AnnualRevenue=?,BillingAddress=?,BillingCity=?,BillingCountry=?,BillingGeocodeAccuracy=?,BillingLatitude=?,BillingLongitude=?,BillingPostalCode=?,BillingState=?,BillingStreet=?,CreatedById=?,CreatedDate=?,Dealer_Type__c=?,Description=?,Email__c=?,Emp_ID__c=?,GSTIN__c=?,Name=?,NumberOfEmployees=?,Out_Standing_Amount__c=?,Partner_Type__c=?,Phone=?,PhotoUrl=?,ShippingAddress=?,RecordTypeId=?,ShippingCity=?,ShippingCountry=?,ShippingGeoCodeAccuracy=?,ShippingLatitude=?,ShippingLongitude=?,ShippingPostalCode=?,ShippingState=?,ShippingStreet=?,State__c=?,Status__c=?,Type=?,Type_of_Dealer__c=?,Warehouse__c=?,AccountNumber=? where Id=?"
    pm= [req.body.adhar,
      req.body.active,req.body.annual,req.body.baddress,req.body.bcity,req.body.bcountry,req.body.bgcaccuracy,req.body.blatitude,req.body.blongitude, req.body.bpostal,req.body.bstate,req.body.bstreet,req.body.createdbyid,req.body.createddate,req.body.dealertype,req.body.desc,req.body.email,req.body.empid,req.body.gst,req.body.accname,req.body.noofemp,req.body.outstdamt,req.body.partner,req.body.phone,req.files[0].originalname,req.body.saddress,req.body.recordid, req.body.scity,req.body.scountry,req.body.sgcaccuracy,req.body.slatitude,req.body.slongitude,req.body.spostal, req.body.sstate,req.body.sstreet,req.body.state,req.body.status,req.body.type,req.body.typeofdealer,req.body.warehouse,req.body.accountno,req.body.Id]
  }
  else{
    q="update account set Aadhar_No__c=?,Active__c=?,AnnualRevenue=?,BillingAddress=?,BillingCity=?,BillingCountry=?,BillingGeocodeAccuracy=?,BillingLatitude=?,BillingLongitude=?,BillingPostalCode=?,BillingState=?,BillingStreet=?,CreatedById=?,CreatedDate=?,Dealer_Type__c=?,Description=?,Email__c=?,Emp_ID__c=?,GSTIN__c=?,Name=?,NumberOfEmployees=?,Out_Standing_Amount__c=?,Partner_Type__c=?,Phone=?,ShippingAddress=?,RecordTypeId=?,ShippingCity=?,ShippingCountry=?,ShippingGeoCodeAccuracy=?,ShippingLatitude=?,ShippingLongitude=?,ShippingPostalCode=?,ShippingState=?,ShippingStreet=?,State__c=?,Status__c=?,Type=?,Type_of_Dealer__c=?,Warehouse__c=?,AccountNumber=? where Id=?"
    pm=[req.body.adhar,
      req.body.active,req.body.annual,req.body.baddress,req.body.bcity,req.body.bcountry,req.body.bgcaccuracy,req.body.blatitude,req.body.blongitude, req.body.bpostal,req.body.bstate,req.body.bstreet,req.body.createdbyid,req.body.createddate,req.body.dealertype,req.body.desc,req.body.email,req.body.empid,req.body.gst,req.body.accname,req.body.noofemp,req.body.outstdamt,req.body.partner,req.body.phone,req.body.saddress,req.body.recordid, req.body.scity,req.body.scountry,req.body.sgcaccuracy,req.body.slatitude,req.body.slongitude,req.body.spostal, req.body.sstate,req.body.sstreet,req.body.state,req.body.status,req.body.type,req.body.typeofdealer,req.body.warehouse,req.body.accountno,req.body.Id] }
  
        pool.query(q,pm,function(err,result){
      if(err){
           console.log(err)
        return  res.status(500).json({RESULT:false})
      }
      else{
        console.log(result)
      return  res.status(200).json({RESULT:true})

      }
  })
  
});

module.exports = router;


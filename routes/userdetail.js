var express = require("express");
var router = express.Router();
var pool = require("./pool");

/*router.post("/checkuserrecord", function (req, res, next) {
  pool.query(
    "select * from userdetails where mobileno=?",
    [req.body.mobileno],
    function (error, result) {
      if (error) {
        return res.status(500).json({ status: false, result: "Server Error" });
      } else {
        if (result.length == 0) {
          return res
            .status(500)
            .json({ result: "NOT FOUND", status: false, data: [] });
        } else {
          return res
            .status(200)
            .json({ result: "FOUND", status: true, data: result });
        }
      }
    }
  );
});*/

router.post("/addnewrecord", function (req, res, next) {
  console.log(req.body);
  pool.query(
    "insert into userdetails(mobileno,firstname,lastname,emailaddress,password,addressstatus)values(?,?,?,?,?,?)",
    [
      req.body.mobileno,
      req.body.firstname,
      req.body.lastname,
      req.body.emailaddress,
      req.body.password,
      false,
    ],
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).json({ result: false });
      } else {
        console.log(result);
        return res.status(200).json({ result: true });
      }
    }
  );
});

router.post("/addAddress", function (req, res, next) {
  console.log(req.body);
  pool.query(
    "update userdetails set state=?, city=?,country='India',zipcode=?,address1=?,address2=?,addressstatus=1 where mobileno=?",

    [
      req.body.state,
      req.body.city,
      req.body.zipcode,
      req.body.address1,
      req.body.address2,
      req.body.mobileno,
    ],
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).json({ RESULT: false });
      } else {
        console.log(result);
        return res.status(200).json({ RESULT: true });
      }
    }
  );
});
router.post("/checkuserrecord", function (req, res, next) {
  console.log(req.data);
  pool.query(
    "select * from userdetails where mobileno=?",
    [req.body.mobileno],
    function (error, result) {
      if (error) {
        return res.status(500).json({ RESULT: "ERROR", DATA: [] });
      } else {
        if (result.length == 0) {
          return res.status(200).json({ RESULT: "NOT FOUND", DATA: [] });
        } else {
          return res.status(200).json({ RESULT: "FOUND", DATA: result });
        }
      }
    }
  );
});

router.post("/userRecord", function (req, res, next) {
  console.log(req.body);
  pool.query(
    "insert into userdetail(username,phonenumber,email,password)values(?,?,?,?)",
    [
      req.body.username,
      req.body.phonenumber,
      req.body.email,
      req.body.password,
    ],
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).json({ RESULT: false });
      } else {
        console.log(result);
        return res.status(200).json({ RESULT: true });
      }
    }
  );
});

router.post("/chkUserRecord", function (req, res, next) {
  console.log(req.body);
  pool.query(
    "select * from userdetail where phonenumber=?",
    [req.body.phonenumber],
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).json({ RESULT: "ERROR", DATA: [] });
      } else {
        if (result.length == 0) {
          return res.status(500).json({ RESULT: "NOT FOUND", DATA: [] });
        } else {
          console.log(result);
          return res.status(200).json({ RESULT: "FOUND", DATA: result });
        }
      }
    }
  );
});

module.exports = router;

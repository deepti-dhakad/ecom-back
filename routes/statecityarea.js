var express = require("express");
var router = express.Router();
var pool = require("./pool");

/* GET users listing. */
router.post("/checkpincode", function (req, res, next) {
  pool.query(
    "select * from areas where pincode=? and status='Yes' ",
    [req.body.pincode],
    function (error, result) {
      if (error) {
        return res.status(500).json([]);
      } else {
        return res.status(200).json(result);
      }
    }
  );
});

router.post("/stateAdd", function (req, res, next) {
  pool.query(
    "insert into states (statename)values(?)",
    [req.body.statename],
    function (error, result) {
      if (error) {
        return res.status(500).json({ result: false });
      } else {
        return res.status(200).json({ result: true });
      }
    }
  );
});

module.exports = router;

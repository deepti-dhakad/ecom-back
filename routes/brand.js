var express = require("express");
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer");
/* GET home page. */
router.post("/brandSubmit", upload.any(), function (req, res, next) {
  pool.query(
    "insert into brand(categoryid,brandname,description,picture,ad,adstatus,topbrands,newbrands)values(?,?,?,?,?,?,?,?)",
    [
      req.body.categoryId,
      req.body.brandName,
      req.body.description,
      req.files[0].originalname,
      req.files[1].originalname,
      req.body.adStatus,
      req.body.topBrands,
      req.body.newBrands,
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

router.post("/editpicture", upload.any(), function (req, res, next) {
  pool.query(
    "update brand set picture=? where brandid=?",
    [req.files[0].originalname, req.body.brandid],
    function (error, result) {
      if (error) {
        return res.status(500).json({ RESULT: false });
      } else {
        return res.status(200).json({ RESULT: true });
      }
    }
  );
});

router.post("/editad", upload.any(), function (req, res, next) {
  pool.query(
    "update brand set ad=? where brandid=?",
    [req.files[0].originalname, req.body.brandid],
    function (error, result) {
      if (error) {
        return res.status(500).json({ RESULT: false });
      } else {
        return res.status(200).json({ RESULT: true });
      }
    }
  );
});

router.get("/displaybrand", function (req, res) {
  pool.query("select * from brand", function (error, result) {
    if (error) {
      console.log(error);
      return res.status(500).json([]);
    } else {
      return res.status(200).json(result);
    }
  });
});
router.get("/fetchbrandsads", function (req, res) {
  pool.query(
    "select * from brand where adstatus='yes' ",
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).json([]);
      } else {
        return res.status(200).json(result);
      }
    }
  );
});
router.get("/fetchTopBrand", function (req, res) {
  pool.query(
    "select * from brand where topbrands='yes' ",
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).json([]);
      } else {
        return res.status(200).json(result);
      }
    }
  );
});

router.get("/fetchNewBrand", function (req, res) {
  pool.query(
    "select * from brand where newbrands='yes' ",
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).json([]);
      } else {
        return res.status(200).json(result);
      }
    }
  );
});

router.post("/deletebrand", function (req, res, next) {
  pool.query(
    "delete from brand where brandid=?",
    [req.body.brandid],
    function (error, result) {
      if (error) {
        return res.status(500).json({ RESULT: false });
      } else {
        return res.status(200).json({ RESULT: true });
      }
    }
  );
});
router.post("/fetchbrands", function (req, res, next) {
  pool.query(
    "select  * from brand where categoryid=?",
    [req.body.categoryid],
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).json([]);
      } else {
        console.log(result);
        return res.status(200).json(result);
      }
    }
  );
});

router.post("/updatebrand", function (req, res, next) {
  pool.query(
    "update  brand set categoryid=?,brandname=?, description=?, adstatus=?,topbrands=?,newbrands=?  where brandid=?",
    [
      req.body.categoryid,
      req.body.brandname,
      req.body.description,
      req.body.adstatus,
      req.body.topbrands,
      req.body.newbrands,
      req.body.brandid,
    ],
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).json({ RESULT: false });
      } else {
        return res.status(200).json({ RESULT: true });
      }
    }
  );
});
router.post("/fetchcategorybybrand", function (req, res) {
  pool.query(
    "select c.* from category c where c.categoryid in(select b.categoryid  from brand b where b.brandid=?)",
    [req.body.brandid],
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).json([]);
      } else {
        return res.status(200).json(result);
      }
    }
  );
});

module.exports = router;

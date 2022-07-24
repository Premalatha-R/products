var express = require('express');
var router = express.Router();

var productService = require('../services/productService');

/* GET top rated products */
router.get('/topRatedProducts', function (req, res, next) {
  productService.getTopRatedproducts(function(err,products) {
    if (err) {
      res.send(err);
    } else {
      res.send(products);
    }
  });
});

/* GET products with special offers */
router.get('/specialOffer', function (req, res, next) {
  productService.getSpecialOfferproducts(function(err,products) {
    if (err) {
      res.send(err);
    } else {
      res.send(products);
    }
  });
});

/* GET bestseller products */
router.get('/bestseller', function (req, res, next) {
  productService.getBestsellerproducts(function(err,products) {
    if (err) {
      res.send(err);
    } else {
      res.send(products);
    }
  });
});

module.exports = router;
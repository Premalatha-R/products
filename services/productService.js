var productDao = require('../daos/productDao');

module.exports.getTopRatedproducts = function(callback) {
     productDao.getTopRatedproducts(callback);
};

module.exports.getSpecialOfferproducts = function(callback) {
     productDao.getSpecialOfferproducts(callback);
};

module.exports.getBestsellerproducts = function(callback) {
     productDao.getBestsellerproducts(callback);
};
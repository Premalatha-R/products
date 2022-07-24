var mongoConfig = require("../config/mongodb");

var url = mongoConfig.url;

var MongoClient = require('mongodb').MongoClient;

module.exports.connect = function(callback) {
    MongoClient.connect(url, callback);
};
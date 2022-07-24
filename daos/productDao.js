var mongodb = require('./mongoDbUtil');

module.exports.getTopRatedproducts = function (callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, db) {
        console.log("Connection with mongodb successful");

        var productsCollection = db.collection('products');

        //get first 3 top rated products record and pass the result to callback
        productsCollection.aggregate([
            {
              $group: {
                _id: null,
                avg: {$avg: "$reviews.rating"},
                count: {$sum: 1},
                data: { $push: "$$ROOT" }
              }
            }, 
            { 
                $sort: {avg : -1}
            },
            {
                $limit : 3
            }
          ]).toArray(function(err, result) {
            callback(err,result);
        });
        
        /* sample data

        productName : 
        price : 
        imageName:
        imageUrl :
        isOffer:
        offerPrice :
        soldCount :
        reviews : [
            {
                userId : 
                rating :
            }
        ]

        */

    });
    
};

module.exports.getSpecialOfferproducts = function (callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, db) {
        console.log("Connection with mongodb successful");

        var productsCollection = db.collection('products');

        //get all products with special offer record and pass the result to callback
        productsCollection.find({isOffer:1}).toArray(function(err, result) {
            callback(err,result);
        });

        /* sample data

        productName : 
        price : 
        imageName:
        imageUrl :
        isOffer:
        offerPrice :
        soldCount :
        reviews : []
            {
                userId : 
                rating :
            },
        ]

        */

    });
};

module.exports.getBestsellerproducts = function (callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, db) {
        console.log("Connection with mongodb successful");

        var productsCollection = db.collection('products');

        //get first 3 top rated products record and pass the result to callback
        productsCollection.find({}).sort({soldCount:-1}).limit(3).toArray(function(err, result) {
            callback(err,result);
        });

        /* sample data

        productName : 
        price : 
        imageName:
        imageUrl :
        isOffer:
        offerPrice :
        soldCount :
        reviews : [
            {
                userId : 
                rating :
            }
        ]
        */

    });
};
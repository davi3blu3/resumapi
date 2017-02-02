var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

MongoClient.connect('mongodb://localhost:27017/resumes', function(err, db){

    assert.equal(err, null);
    console.log('Successfully connected to databse');

});
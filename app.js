var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

MongoClient.connect('mongodb://localhost:27017/resumapi', function(err, db){

    assert.equal(err, null);
    console.log('Successfully connected to databse');

    db.collection('resumes').find().toArray(function(err, docs){

        assert.equal(err, null);
        assert.notEqual(docs.length, 0);

        docs.forEach(function(doc){
            console.log(doc);
        })

    });

    db.close();
});
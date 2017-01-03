var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017/adminpage';


var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
							{a : 1}, {a : 2}, {a : 3}
						], 
	function(err, result) {
	    console.log("Inserted 3 documents into the collection");
	    callback(result);
  });
}


var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

var calcCount = function(db, callback) {
	// Get the documents collection
  	var collection = db.collection('documents');
  	collection.count(function(err, count) {
	    console.log(count)
	    callback(count);
  });
  	callback();
}




// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  console.log("Connected successfully to server");


  calcCount(db, function() {
      db.close();
  });
});
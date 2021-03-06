const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
  console.log('Connected')

  // database name
  const dbName = 'TieredBankProject';
  const db = client.db(dbName);

  // new user
  var name = 'user' + Math.floor(Math.random()*10000);
  var email = name + '@gmail.com';

  // inset into customer table 
  var collection = db.collection('customers');
  var doc = {name, email};
  collection.insertOne(doc, {w:1}, (err, result) => {
    console.log('Document Insert');
  });

  var customers = db
    .collection('customers')
    .find()
    .toArray((err, docs)=> {
      console.log('Collection: ', docs);

      // clean up
      client.close();
    })
});
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://danzlot:Gcr79nPshjTHtkIs@badbankproject.58xfxsk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const db = client.db('TieredBank');

client.connect();


  console.log('connected')
// create user account using the collection.insertOne function
function create(name, email, password) {
  
    return new Promise((resolve, reject) => {
      const collection = db.collection('users');
      const doc = {name, email, password, balance:0, transactions:[]};
      collection.insertOne(doc, {w:1}, (err, result) => {
        err ? reject(err) : resolve(doc);
      });
    })
}

// find user account 
function find(email) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({ email: email })
            .toArray(function (err, docs) {
                err ? reject(err) : resolve(docs);
            });
    })
}

// find user account
function findOne(email) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOne({ email: email })
            .then((doc) => resolve(doc))
            .catch((err) => reject(err));
    })
}

// update - deposit/withdraw amount
function update(email, amount) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOneAndUpdate(
                { email: email },
                { $inc: { balance: amount } },
                { returnOriginal: false },
                function (err, documents) {
                    err ? reject(err) : resolve(documents);
                }
            );
    });
}

// update transaction history
function updateHist(email, transaction) {
  return new Promise((resolve, reject) => {
      const customers = db
          .collection('users')
          .findOneAndUpdate(
              { email: email },
              { $push: { transactions: transaction } },
              { returnOriginal: false },
              function (err, documents) {
                  err ? reject(err) : resolve(documents);
              }
          );
  });
}

// return all users by using the collection.find method
function all() {
    return new Promise((resolve, reject)=> {
      const customers = db
        .collection('users')
        .find({})
        .toArray((err, docs) => {
          err ? reject(err) : resolve(docs);
        });
    })
}


module.exports = { create, findOne, find, update, all, updateHist };


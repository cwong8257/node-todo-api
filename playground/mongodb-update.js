const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // db
  //   .collection('Todos')
  //   .findOneAndUpdate(
  //     { _id: new ObjectID('5aa9aca78945fc52545a12ee') },
  //     { $set: { completed: true } },
  //     { returnOriginal: false }
  //   )
  //   .then(result => {
  //     console.log(result);
  //   });

  db
    .collection('Users')
    .findOneAndUpdate(
      { _id: new ObjectID('5aa995f952c6b32a74d67bcf') },
      { $inc: { age: 1 }, $set: { name: 'Chris' } },
      { returnOriginal: false }
    )
    .then(result => {
      console.log(result);
    });

  // client.close();
});

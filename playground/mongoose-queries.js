const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '5aaaab7e3ebe4121a41f2655';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
//   })
//   .catch(e => console.log(e));

const id = '5aa9f81d538ed0291c3cfca9';

User.findById(id)
  .then(user => {
    if (!user) {
      return console.log('Id not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
  })
  .catch(e => console.log(e));

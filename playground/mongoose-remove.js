const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

Todo.findByIdAndRemove('5aaae2506347232a373aa830').then(todo => {
  console.log(todo);
});

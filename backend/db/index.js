const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/TaskManagementDB')
  .then(() => {
    console.log('Connected to TaskManagementDB');
  })
  .catch(e => {
    console.log(e);
  });

module.exports = mongoose;

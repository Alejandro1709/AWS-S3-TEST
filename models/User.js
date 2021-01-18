const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model('User', userSchema);

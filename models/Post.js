const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: [{
    text: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }],
});

module.exports = mongoose.model('Post', postSchema);

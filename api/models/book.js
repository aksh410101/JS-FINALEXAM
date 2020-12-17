const mongoose = require('mongoose');

// Our schema
const BookSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  JOB: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', BookSchema);
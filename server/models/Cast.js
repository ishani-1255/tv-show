const mongoose = require('mongoose');

const CastSchema = new mongoose.Schema({
  name: { type: String, required: true },
  profilePicture: { type: String, required: true },
  bio: { type: String, required: true },
});

module.exports = mongoose.model('Cast', CastSchema);

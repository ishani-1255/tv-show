const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  episodeId: { type: Number, required: true }, // Referencing `id` field of Episode
  text: { type: String, required: true },
});

module.exports = mongoose.model('Comment', CommentSchema);

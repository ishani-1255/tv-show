const mongoose = require('mongoose');

const EpisodeSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  img: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  airDate: { type: Date, required: true },
});

module.exports = mongoose.model('Episode', EpisodeSchema);

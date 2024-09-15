const express = require('express');
const router = express.Router();
const Episode = require('../models/Episode');

// Get all episodes
router.get('/', async (req, res) => {
  try {
    const episodes = await Episode.find();
    res.json(episodes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get episode by ID
router.get('/:id', async (req, res) => {
  try {
    const episode = await Episode.findOne({ id: parseInt(req.params.id) }); // Use `findOne` with the custom `id` field
    if (!episode) return res.status(404).json({ message: 'Episode not found' });
    res.json(episode);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;


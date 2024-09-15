// server.js (or routes/cast.js if you have a separate routes file)

// server/routes/cast.js
const express = require('express');
const router = express.Router();
const Cast = require('../models/Cast'); // Make sure this path is correct

// GET /api/cast - Fetch all cast members
router.get('/', async (req, res) => {
  try {
    const castMembers = await Cast.find();
    res.json(castMembers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

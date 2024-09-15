const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const Episode = require('../models/Episode');

// GET comments for a specific episode by episode id
router.get('/:episodeId', async (req, res) => {
  try {
    const comments = await Comment.find({ episodeId: parseInt(req.params.episodeId) });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new comment for a specific episode by episode id
router.post('/:episodeId', async (req, res) => {
  const comment = new Comment({
    episodeId: parseInt(req.params.episodeId), // Use episodeId as a number
    text: req.body.text,
  });
  
  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

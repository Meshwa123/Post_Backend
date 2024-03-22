const express = require('express');
const router = express.Router();
// const Post = require('../models/Post');
// const { createPost, getPost, updatePost, likePost, deletePost, commentPost } = require('../controllers/postController');
const { authMiddleware } = require('../middleware/authMiddleware');
const { createPost, getPost, updatePost, deletePost, likePost, commentPost } = require('../controllers/postController');

// Create a new post
router.post('/',authMiddleware,createPost);

// Get all posts
router.get('/',authMiddleware,getPost);

// update post
router.put('/:id', authMiddleware,updatePost);

// delete post
router.delete('/:id', authMiddleware,deletePost);

// Like a post
router.put('/:id/like', authMiddleware,likePost);

// Add a comment to a post
router.post('/:id/comment', authMiddleware,commentPost);

module.exports = router;

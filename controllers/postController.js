// const express = require('express');
const Post = require('../models/Post');

const createPost = async (req,res) =>{
    try {
        const post = new Post({
          text: req.body.text,
        });
        const savedPost = await post.save();
        res.json(savedPost);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
}

const getPost = async (req,res) =>{
    try {
        const posts = await Post.find();
        res.json(posts);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}

const updatePost = async (req,res) =>{
    const { text } = req.body;
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, { text }, { new: true });
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.json(post);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
}

const deletePost = async (req,res) =>{
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
          return res.status(404).json({ error: 'Post not found' });
        }
        res.json(post);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
}

const likePost = async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id);
        post.likes += 1;
        const updatedPost = await post.save();
        res.json(updatedPost);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
}

const commentPost = async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id);
        post.comments.push({ text: req.body.text });
        const updatedPost = await post.save();
        res.json(updatedPost);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
}

module.exports = {createPost,getPost,updatePost,deletePost,likePost,commentPost}
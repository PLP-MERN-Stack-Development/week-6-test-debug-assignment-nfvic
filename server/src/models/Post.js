const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  category: String,
  slug: String,
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post; 
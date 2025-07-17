const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const app = express();
app.use(express.json());

const postsRouter = express.Router();

// Dummy auth middleware
function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  // For tests, the token is the userId string
  req.userId = authHeader.replace('Bearer ', '');
  next();
}

// POST /api/posts
postsRouter.post('/', authMiddleware, async (req, res) => {
  let { title, content, category, slug } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    if (category) category = category.toString();
    const post = await Post.create({ title, content, author: req.userId, category, slug });
    res.status(201).json(post);
  } catch (err) {
    console.error('POST /api/posts error:', err);
    res.status(400).json({ error: err.message });
  }
});

// GET /api/posts
postsRouter.get('/', async (req, res) => {
  try {
    const { category, page = 1, limit = 10 } = req.query;
    const filter = {};
    if (category) filter.category = category.toString();
    const skip = (parseInt(page) - 1) * parseInt(limit);
    let posts = await Post.find(filter).skip(skip).limit(parseInt(limit));
    posts = posts.map(post => {
      const obj = post.toObject();
      if (obj.category) obj.category = obj.category.toString();
      return obj;
    });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/posts/:id
postsRouter.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/posts/:id
postsRouter.put('/:id', authMiddleware, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    if (post.author.toString() !== req.userId) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    const { title, content, category, slug } = req.body;
    if (title !== undefined) post.title = title;
    if (content !== undefined) post.content = content;
    if (category !== undefined) post.category = category.toString();
    if (slug !== undefined) post.slug = slug;
    await post.save();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/posts/:id
postsRouter.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    if (post.author.toString() !== req.userId) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    await post.deleteOne();
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use('/api/posts', postsRouter);

module.exports = app; 
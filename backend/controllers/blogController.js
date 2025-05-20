const Blog = require('../models/Blog');

exports.saveDraft = async (req, res) => {
  const { id, title, content, tags } = req.body;
  try {
    let blog;
    if (id) {
      blog = await Blog.findByIdAndUpdate(id, { title, content, tags, status: 'draft' }, { new: true });
    } else {
      blog = new Blog({ title, content, tags, status: 'draft' });
      await blog.save();
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.publish = async (req, res) => {
  const { id, title, content, tags } = req.body;
  try {
    let blog;
    if (id) {
      blog = await Blog.findByIdAndUpdate(id, { title, content, tags, status: 'published' }, { new: true });
    } else {
      blog = new Blog({ title, content, tags, status: 'published' });
      await blog.save();
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ updated_at: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

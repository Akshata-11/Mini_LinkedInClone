const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const newPost = new Post({
      content: req.body.content,
      author: req.user.id,
    });
    await newPost.save();
    res.json(newPost);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name")
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

const Post = require("../models/Post");
const User = require("../models/User");

const createPost = async (req, res) => {
  const authorId = req.id;
  const authorAccountType = req.accountType;

  if (authorAccountType === "buyer") {
    return res
      .status(403)
      .json({ success: false, message: "Forbidden, only sellers can post" });
  }
  const { title, author, price, image, publicId } = req.body;
  try {
    const post = new Post({
      title,
      author,
      price,
      image,
      authorId,
      publicId,
    });
    await post.save();

    await User.findByIdAndUpdate(authorId, {
      $push: { uploads: post._id },
    });

    return res
      .status(201)
      .json({ success: true, message: "Post created successfully", post });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: error.message });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }
    const { authorId } = post;
    await User.findByIdAndUpdate(authorId, {
      $pull: { uploads: id },
    });
    await Post.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ success: true, message: "Post deleted successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    if (posts.length === 0)
      return res.status(200).json({ success: true, message: "No posts found" });
    return res.status(200).json({ success: true, posts });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { createPost, deletePost, getAllPosts };

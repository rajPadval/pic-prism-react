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
    return res.status(500).json({ success: false, message: error.message });
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
    return res.status(200).json({ success: true, data: posts });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const getMyPosts = async (req, res) => {
  const authorId = req.id;
  const authorAccountType = req.accountType;
  try {
    if (authorAccountType === "buyer") {
      const { purchased } = await User.findById(authorId).populate("purchased");
      console.log(purchased);
      if (!purchased)
        return res
          .status(200)
          .json({ success: true, message: "No posts found" });
      return res.status(200).json({ success: true, data: purchased });
    } else {
      const { uploads } = await User.findById(authorId).populate("uploads");
      if (!uploads)
        return res
          .status(200)
          .json({ success: true, message: "No posts found" });
      return res.status(200).json({ success: true, data: uploads });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getPostsByDateRange = async (req, res) => {
  const authorId = req.id;
  const authorAccountType = req.accountType;
  let data;
  try {
    if (authorAccountType === "buyer") {
      const { purchased } = await User.findById(authorId).populate("purchased");
      data = purchased;
    } else {
      const { uploads } = await User.findById(authorId).populate("uploads");
      data = uploads;
    }

    if (!data) {
      return res.status(200).json({ success: true, message: "No posts found" });
    }

    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));

    const postsThisYear = data.filter(
      (post) => new Date(post.createdAt) >= startOfYear
    );
    const postsThisMonth = data.filter(
      (post) => new Date(post.createdAt) >= startOfMonth
    );
    const postsThisWeek = data.filter(
      (post) => new Date(post.createdAt) >= startOfWeek
    );

    return res.status(200).json({
      success: true,
      data: {
        tillNow: data,
        thisYear: postsThisYear,
        thisMonth: postsThisMonth,
        thisWeek: postsThisWeek,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const searchPosts = async (req, res) => {
  const { search } = req.query;
  try {
    const posts = await Post.find({
      title: { $regex: search, $options: "i" },
    });
    if (posts.length === 0)
      return res.status(200).json({ success: true, message: "No posts found" });
    return res.status(200).json({ success: true, data: posts });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const addToFavourites = async (req, res) => {};

module.exports = {
  createPost,
  deletePost,
  getAllPosts,
  getMyPosts,
  getPostsByDateRange,
  searchPosts,
  addToFavourites,
};

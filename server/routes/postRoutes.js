const {
  createPost,
  deletePost,
  getAllPosts,
  getMyPosts,
  getPostsByDateRange,
  searchPosts,
  purchasePost,
} = require("../controllers/postController");
const { verifyToken } = require("../middlewares/verifyToken");

const router = require("express").Router();

router.post("/post/create", verifyToken, createPost);
router.delete("/post/delete/:id", verifyToken, deletePost);
router.get("/post/getAll", getAllPosts);
router.get("/post/myPosts", verifyToken, getMyPosts);
router.get("/post/getPostsByDateRange", verifyToken, getPostsByDateRange);
router.get("/posts/search", searchPosts);


module.exports = router;

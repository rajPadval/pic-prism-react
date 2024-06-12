const {
  createPost,
  deletePost,
  getAllPosts,
} = require("../controllers/postController");
const { verifyToken } = require("../middlewares/verifyToken");

const router = require("express").Router();

router.post("/post/create", verifyToken, createPost);
router.delete("/post/delete/:id", verifyToken, deletePost);
router.get("/post/getAll", getAllPosts);

module.exports = router;

const {
  createPost,
  deletePost,
  getAllPosts,
  getMyPosts,
  getPostsByDateRange,
  searchPosts,
  addToFavourites,
  removeFromFavourites,
  getFavourites,
} = require("../controllers/postController");
const { verifyToken } = require("../middlewares/verifyToken");

const router = require("express").Router();

router.post("/post/create", verifyToken, createPost);
router.delete("/post/delete/:id", verifyToken, deletePost);
router.get("/post/getAll", getAllPosts);
router.get("/post/myPosts", verifyToken, getMyPosts);
router.get("/post/getPostsByDateRange", verifyToken, getPostsByDateRange);
router.get("/posts/search", searchPosts);
router.put("/posts/addToFavourites/:postId", verifyToken, addToFavourites);
router.put(
  "/posts/removeFromFavourites/:postId",
  verifyToken,
  removeFromFavourites
);
router.get("/posts/favourites", verifyToken, getFavourites);

module.exports = router;

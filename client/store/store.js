import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./slices/navSlice";
import authSlice from "./slices/authSlice";
import postsSlice from "./slices/postsSlice";

export const store = configureStore({
  reducer: {
    nav: navSlice,
    auth: authSlice,
    posts: postsSlice,
  },
});

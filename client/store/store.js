import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./slices/navSlice";
import authSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    nav: navSlice,
    auth: authSlice,
  },
});

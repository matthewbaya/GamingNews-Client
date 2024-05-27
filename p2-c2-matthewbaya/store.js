import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "./features/article/articleSlice";

export default configureStore({
  reducer: {
    articles: articleSlice,
  },
});

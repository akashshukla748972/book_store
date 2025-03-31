import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    book: bookReducer,
    user: userReducer,
  },
});

export default store;

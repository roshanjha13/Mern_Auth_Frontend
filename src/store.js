import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;

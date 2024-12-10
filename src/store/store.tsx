// store/store.js
import { configureStore, Middleware } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import postsSlice from "./slices/postsSlice";

const loggerMiddleware: Middleware = (storeAPI) => (next) => (action) => {
  console.log("Dispatching:", action);
  const result = next(action);
  console.log("Next state:", storeAPI.getState());
  return result;
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});
export type RootState = ReturnType<typeof store.getState>; // Get the RootState type from the store
export type AppDispatch = typeof store.dispatch; // Define AppDispatch type
export default store;

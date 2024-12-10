import { createSlice } from "@reduxjs/toolkit";

type RootState = {
  posts: {
    id: number;
    title: string;
    content: string;
  }[];
};

const initialState = [
  { id: 1, title: "Learning Redux", content: "Some test Content for id 1" },
  { id: 2, title: "Learning Slices", content: "Some test Content for id 2" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const selectAllPosts = (state: RootState) => state.posts;
export default postsSlice.reducer;

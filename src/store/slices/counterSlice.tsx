import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  status: "idle",
};
// Simulate an async operation
export const fetchInitialCount = createAsyncThunk(
  "counter/fetchInitialCount",
  async () => {
    const response = await new Promise<{ count: number }>((resolve) =>
      setTimeout(() => resolve({ count: 10 }), 1000)
    );
    return response.count;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = initialState.count;
    },
    incrementByAmmount: (state, action) => {
      state.count += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialCount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInitialCount.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.count = action.payload;
      })
      .addCase(fetchInitialCount.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectAllCounts = (state: {
  counter: {
    count: number;
  };
}) => state.counter.count;
export const { increment, decrement, reset, incrementByAmmount } =
  counterSlice.actions;

export default counterSlice.reducer;

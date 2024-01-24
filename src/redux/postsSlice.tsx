import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./operations";

type Post = { body: string; id: number; title: string; userId: number };
type InitialState = { posts: Post[]; isLoading: boolean; error: string | null };
const initialState: InitialState = { posts: [], isLoading: false, error: null };

const DataSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending](state: InitialState) {
      state.isLoading = true;
    },
    [fetchData.rejected](state: InitialState, action: any) {
      state.isLoading = false;
      state.error = action.payload as string;
    },
    [fetchData.fulfilled](state: InitialState, action: any) {
      state.isLoading = false;
      state.error = null;
      state.posts = action.payload as Post[];
    },
  },
});

export const postsReducer = DataSlice.reducer;

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData: any = createAsyncThunk(
  "posts/fetchData",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

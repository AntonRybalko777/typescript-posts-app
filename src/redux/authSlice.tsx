import { createSlice } from "@reduxjs/toolkit";

type User = { login: string; password: string };
type InitialState = {
  isLoggedIn: boolean;
  users: User[];
  loggedUser: string | null;
};
const initialState: InitialState = {
  isLoggedIn: false,
  users: [{ login: "admin", password: "admin" }],
  loggedUser: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.loggedUser = action.payload;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.loggedUser = null;
    },
  },
});
export const authReducer = AuthSlice.reducer;
export const { logIn, logOut } = AuthSlice.actions;

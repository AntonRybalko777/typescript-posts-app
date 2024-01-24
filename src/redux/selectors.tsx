export const selectPosts = (state: any) => state.posts.posts;
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectUsers = (state: any) => state.auth.users;
export const selectUser = (state: any) => state.auth.loggedUser;

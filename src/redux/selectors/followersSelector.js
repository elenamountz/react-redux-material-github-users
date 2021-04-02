export const selectUserFollowers = (state) => state.followers.data;
export const selectFollowersLoading = (state) => state.followers.isLoading;
export const selectFollowersError = (state) => state.followers.error;

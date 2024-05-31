import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  repos: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

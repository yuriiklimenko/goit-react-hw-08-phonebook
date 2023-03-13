import { createSlice } from '@reduxjs/toolkit';

import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleRejected = (state, action) => {
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    // register
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [register.rejected]: handleRejected,
    //logIn
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    //logOut
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    //refreshUser
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    // --------------------------------
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    // --------------------------------
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;

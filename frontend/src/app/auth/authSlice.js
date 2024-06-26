import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: JSON.parse(localStorage.getItem('token')) || null,
    user: null,
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
    },
    logout(state, action) {
      state.token = null;
      state.user = null;
    },
    setUser(state, action) {
      state.user = action.payload.user;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;

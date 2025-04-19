import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LOGINAPI } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(LOGINAPI, userCredentials);
      const token = response.data?.data?.token;
      await AsyncStorage.setItem('user', JSON.stringify(token));
      return token;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Login failed');
    }
  }
);

export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      return rejectWithValue('Failed to restore session');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
    token: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      AsyncStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; 
        state.token = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

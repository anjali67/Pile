import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { EVENTLISTINGAPI } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadFavorites = createAsyncThunk(
  'events/loadFavorites',
  async () => {
    const stored = await AsyncStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  }
);

// Save favorites to AsyncStorage
export const saveFavorites = createAsyncThunk(
  'events/saveFavorites',
  async (_, { getState }) => {
    const { event } = getState();
    await AsyncStorage.setItem('favorites', JSON.stringify(event.favorites));
  }
);

// Fetch event list from API
export const fetchEvents = createAsyncThunk(
  'events/fetchEvents',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const token = auth.token;

      const response = await axios.post(
        EVENTLISTINGAPI,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch events');
    }
  }
);

// Event slice
const eventSlice = createSlice({
  name: 'event',
  initialState: {
    events: [],
    favorites: [],
    loading: false,
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const eventId = action.payload;
      const index = state.favorites.indexOf(eventId);
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(eventId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload.data || [];
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch events';
      })
      .addCase(loadFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  },
});

export const { toggleFavorite } = eventSlice.actions;
export default eventSlice.reducer;

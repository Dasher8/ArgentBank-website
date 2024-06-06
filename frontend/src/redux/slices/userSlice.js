import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('user/fetchUser', async (token, { rejectWithValue }) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    });
    if (!response.ok) {
      return rejectWithValue('Failed to fetch user');
    }
    const data = await response.json();
    return data.body;
  } catch (error) {
    return rejectWithValue('Failed to fetch user');
  }
});

export const updateUserName = createAsyncThunk('user/updateUserName', async ({ token, userName }, { rejectWithValue }) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify({ userName }),
    });
    if (!response.ok) {
      return rejectWithValue('Failed to update username');
    }
    const data = await response.json();
    return data.body;
  } catch (error) {
    return rejectWithValue('Failed to update username');
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    userName: '',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.payload;
      console.log("L'utilisateur n'a pas pu être récupéré.", action.error.message);
    });
    builder.addCase(updateUserName.fulfilled, (state, action) => {
      state.userName = action.payload.userName;
    });
    builder.addCase(updateUserName.rejected, (state, action) => {
      state.error = action.payload;
      console.log("Failed to update username.", action.error.message);
    });
  },
});

export default userSlice.reducer;

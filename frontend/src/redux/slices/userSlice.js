import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('user/fetchUser', async (token) => {
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  });
  const data = await response.json();
  return data.body;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    userName: '',
  },
  reducers: {
    setUserName(state, action) {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      console.log("L'utilisateur n'a pas pu être récupéré.", action.error.message);
    });
  },
});

export const { setUserName } = userSlice.actions;
export default userSlice.reducer;
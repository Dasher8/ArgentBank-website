import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  'authenticationSlice/loginUser',
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || 'Login failed');
      }
      const data = await response.json();
      
      // Store token based on rememberMe value
      if (rememberMe) {
        localStorage.setItem('authToken', data.body.token);
      } else {
        sessionStorage.setItem('authToken', data.body.token);
      }

      return data.body.token;
    } catch (error) {
      return rejectWithValue('Erreur dans l’identifiant ou le mot de passe');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem("authToken") || sessionStorage.getItem("authToken"),
    error: null,
    loading: false,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('authToken');
      sessionStorage.removeItem('authToken');
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
        state.token = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
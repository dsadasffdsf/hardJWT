import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import AuthService from '../../services/AuthService';
import { AuthResponse } from '../../modules/response/AuthResponse';
import { IUser } from '../../modules/response/IUser';
import { API_URL } from '../../http/todo';

interface AuthData {
  email: string;
  password: string;
}

interface InitialUser {
  isAuth: boolean;
  username: string | null;
}

// то что возвращает , то чем орудует ,спец штуки
export const fetchLogin = createAsyncThunk<AuthResponse, AuthData>(
  'user/login',
  async ({ email, password }) => {
    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      return response.data;
    } catch (error) {
      console.log('Error', error);
    }
  },
);

export const fetchRegistration = createAsyncThunk<void, AuthData>(
  'user/registration',
  async ({ email, password }) => {
    try {
      const response = await AuthService.registration(email, password);
      console.log(response);
      // localStorage.setItem('token', response.data.accessToken);
    } catch (error) {
      console.log('Error', error);
    }
  },
);

export const fetchCheckAuth = createAsyncThunk<AuthResponse, void>('user/update', async (_,{rejectWithValue}) => {
  try {
    const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });
    console.log(response);
    localStorage.setItem('token', response.data.accessToken);
    return response.data;
  } catch (error) {
    console.log(error.response?.data?.message);
    return rejectWithValue(error.response?.data?.message);
  }
});

export const fetchLogout = createAsyncThunk<void, void>('user/logout', async () => {
  try {
    const response = await AuthService.logout();
    localStorage.removeItem('token');
  } catch (error) {
    console.log(error.response?.data?.message);
  }
});

const initialState: InitialUser = {
  isAuth: false,
  username: null,
  // setLoading: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.isAuth = true;
      state.username = action.payload.user.email;
    });
    builder.addCase(fetchRegistration.fulfilled, (state) => {
      // state.isAuth = true;
    });
    builder.addCase(fetchCheckAuth.pending, (state) => {
      // state.setLoading = false;
    });
    builder.addCase(fetchCheckAuth.rejected, (state) => {
      state.isAuth = false;
      state.username = null;
    });
    builder.addCase(fetchCheckAuth.fulfilled, (state, action) => {
      state.isAuth = true;
      // state.setLoading = true;
      state.username = action.payload.user.email;
    });
    builder.addCase(fetchLogout.fulfilled, (state) => {
      state.username = null;
      state.isAuth = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = postsSlice.actions;

export default postsSlice.reducer;

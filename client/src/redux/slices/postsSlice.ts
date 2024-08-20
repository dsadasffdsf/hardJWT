import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Post } from '../../modules/IPost';
import PostService from '../../services/PostService';
import { addAlert } from './alertSlice';

interface InitialPost {
  postsList: Post[];
  active: number;
  inactive: number;
}


interface RegistrationResponse {
  message: string;
}
export const addPost = createAsyncThunk<void, Post>(
  'posts/addPost',
  async ({ title, desc, status, author }, { dispatch }) => {
    try {
      const response = await PostService.addPost(title, desc, status, author);
      console.log(response);
      dispatch(getPosts());
    } catch (error) {
      dispatch(addAlert({ message: 'Не удалось добавить пост', alertType: 'error' }));
      console.log('Error', error);
    }
  },
);
export const remPost = createAsyncThunk<RegistrationResponse, string>(
  'posts/remPost',
  async (_id, { dispatch, rejectWithValue }) => {
    try {
      const response = await PostService.remPost(_id);
      console.log(response);
      dispatch(addAlert({ message: response.data.message, alertType: 'success' }));
      dispatch(getPosts());
    } catch (error) {
      console.log('Error', error);
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const getPosts = createAsyncThunk<Post[], void>('posts/getPosts', async () => {
  try {
    const response = await PostService.getPosts();
    console.log(response);
    return response.data;
  } catch (error) {
    console.log('Error', error);
    throw error;
  }
});

export const updatePost = createAsyncThunk<void, string>(
  'posts/updatePost',
  async (_id, thunkAPI) => {
    try {
      const response = await PostService.updatePost(_id);
      console.log(response);
      thunkAPI.dispatch(getPosts());
    } catch (error) {
      console.log('Error', error);
    }
  },
);

const initialState: InitialPost = {
  postsList: [],
  active: 0,
  inactive: 0,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      if (action.payload) {
        state.active = 0;
        state.inactive = 0;
        state.postsList = action.payload;
        action.payload.map((item) => {
          if (item.status === true) {
            state.active += 1;
          } else {
            state.inactive += 1;
          }
        });
      } else {
        state.postsList = [];
      }
    });
  },
});

export const {} = postsSlice.actions;

export default postsSlice.reducer;

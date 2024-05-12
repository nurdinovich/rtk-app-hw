import {createSlice} from "@reduxjs/toolkit"
import fetchPost from "../reducers/postCreator";


const initialState = {
    post: [],
    isLodingPost: false,
    postError: "",
  };

  const postSlice = createSlice({
    initialState,
    name: "Post",
    reducers: {
      setPost: (state, action) => {
        state.post = action.payload;
        state.isLodingPost = false;
      },
  
      setIsLodingPost: (state) => {
        state.isLodingPost = true;
        state.post = [];
        state.postError = "";
      },
      setPostError: (state, action) => {
        state.postErrorError = action.payload;
        state.isLodingPost = false;
      },
    },
    extraReducers:(builder) =>{
      builder.addCase(fetchPost.pending,(state) => {
          state.isLodingPost = true;
          state.post = [];
          state.postError = "";
        })
        builder.addCase(fetchPost.fulfilled,(state, action) => {
          state.post = action.payload;
          state.isLodingPost = false;
        })
        builder.addCase(fetchPost.rejected,(state, action) => {
          state.postError = action.payload;
          state.isLodingPost = false;
        })
    }
  });
  
  const postReducer = postSlice.reducer;
export const { setIsLodingPost, setPost, setPostError } = postSlice.actions;
export default postReducer;
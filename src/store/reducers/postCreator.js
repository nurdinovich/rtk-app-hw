import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const fetchPost = createAsyncThunk('post/fetchAll', async (payload, thunkApi) => {
    try {
        const response = await api.getPost();
        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue('Try again later, failed to fetch');
    }
});

export default fetchPost;
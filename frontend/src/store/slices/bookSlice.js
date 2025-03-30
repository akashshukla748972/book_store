import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../api/Axios";

export const getAllBook = createAsyncThunk("getAllBook", async () => {
  try {
    const { data } = await Axios.get("/books/");
    return data.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Something went wrong");
  }
});

const initialState = {
  books: null,
  isLoading: false,
  isError: false,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllBook.fulfilled, (state, action) => {
      state.books = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(getAllBook.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getAllBook.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default bookSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../api/Axios";

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
};

export const loginUser = createAsyncThunk("loginUser", async (userData) => {
  const response = await Axios.post("/users/login/", userData);
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      (state.isLoading = false), (state.isError = true);
    });
  },
});

export default userSlice.reducer;

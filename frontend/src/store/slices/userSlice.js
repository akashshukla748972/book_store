import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../api/Axios";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  isLoading: false,
  isError: false,
  errorMessage: null,
  successMessage: null,
};

export const loginUser = createAsyncThunk(
  "loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await Axios.post("/users/login/", userData);
      if (response.status == 200) {
        localStorage.setItem("token", response.data.token);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const getUserData = createAsyncThunk(
  "getUserData",
  async (id, { rejectWithValue }) => {
    try {
      const response = await Axios.get(`/users/${id}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "User not found");
    }
  }
);

export const registerUser = createAsyncThunk(
  "registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await Axios.post("/users/register", userData);
      console.log("res: ", response);
      if (response.status == 201) {
        localStorage.setItem("token", response.data.token);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Sign Failed");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isError = false;
        state.errorMessage = null;
        state.successMessage = action.payload.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
        state.successMessage = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
        state.successMessage = null;
      });

    builder
      .addCase(getUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.successMessage = action.payload.message;
        state.errorMessage = null;
      })
      .addCase(getUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.successMessage = null;
        state.errorMessage = action.payload;
      });
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload.message;
        state.token = action.payload.token;
        state.errorMessage = null;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
        state.successMessage = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
        state.successMessage = null;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

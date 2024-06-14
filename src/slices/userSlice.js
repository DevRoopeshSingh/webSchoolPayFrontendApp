import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../services/UserService";

const initialState = [];

export const createUser = createAsyncThunk(
  "users/create",
  async ({ name, title, status, role }) => {
    const res = await UserService.create({ name, title, status, role });
    return res.data;
  }
);

export const retrieveUsers = createAsyncThunk(
  "users/retrieve",
  async () => {
    const res = await UserService.getAll();
    return res.data;
  }
);

export const updateUser = createAsyncThunk(
  "users/update",
  async ({ id, data }) => {
    const res = await UserService.update(id, data);
    return res.data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/delete",
  async ({ id }) => {
    await UserService.remove(id);
    return { id };
  }
);

export const deleteAllUsers = createAsyncThunk(
  "users/deleteAll",
  async () => {
    const res = await UserService.removeAll();
    return res.data;
  }
);

export const findUsersByName = createAsyncThunk(
  "users/findByName",
  async ({ name }) => {
    const res = await UserService.findByName(name);
    return res.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [createUser.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrieveUsers.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [updateUser.fulfilled]: (state, action) => {
      const index = state.findIndex(user => user.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteUser.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
    [deleteAllUsers.fulfilled]: (state, action) => {
      return [];
    },
    [findUsersByName.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

const { reducer } = userSlice;
export default reducer;

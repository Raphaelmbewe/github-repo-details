/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { fetchRequest } from "../../../config/axios";

type User = {
  full_name: string;
  location: string;
  created: string;
  updated: string;
  avatar_url: string;
  html_url: string;
  repos: number;
  following: number;
  followers: number;
};

interface InitialState {
  isLoading: boolean;
  data: User | undefined;
  success: string | null;
  error: string | null;
}

const initialState: InitialState = {
  isLoading: false,
  data: undefined,
  success: null,
  error: null,
};

export const STATE_KEY = "user";
const userSlice = createSlice({
  name: STATE_KEY,
  initialState,
  reducers: {
    request(state) {
      state.isLoading = true;
    },
    requestSuccess(state, action) {
      state.isLoading = false;
      state.success = action.payload?.response;
      state.data = action.payload?.response;
    },
    requestFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload?.error?.message;
    },

    clear(state) {
      state.data = undefined;
      state.success = null;
      state.error = null;
    },
  },
});

export const { request, requestFailed, requestSuccess, clear } =
  userSlice.actions;

export const getUser = (name: string) => async (dispatch: any) => {
  dispatch(request());
  fetchRequest({
    url: `https://api.github.com/users/${name}`,
    method: "GET",
  })(requestSuccess)(requestFailed)(dispatch);
};


export const userSelector = (state: any) => state[STATE_KEY];

export default userSlice.reducer;

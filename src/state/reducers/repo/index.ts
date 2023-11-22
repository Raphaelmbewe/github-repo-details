/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { fetchRequest } from "../../../config/axios";

type Repo = {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
};

interface InitialState {
  isLoading: boolean;
  repos: Repo[] | [];
  success: string | null;
  error: string | null;
}

const initialState: InitialState = {
  isLoading: false,
  repos: [],
  success: null,
  error: null,
};

export const STATE_KEY = "repos";
const repoSlice = createSlice({
  name: STATE_KEY,
  initialState,
  reducers: {
    request(state) {
      state.isLoading = true;
    },
    requestSuccess(state, action) {
      state.isLoading = false;
      state.success = action.payload?.response?.message;
      state.repos = action.payload?.response;
    },
    requestFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload?.response?.message;
    },

    clear(state) {
      state.repos = [];
      state.success = null;
      state.error = null;
    },
  },
});

export const { request, requestFailed, requestSuccess, clear } =
  repoSlice.actions;

export const getRepos = (name: string) => async (dispatch: any) => {
  dispatch(request());
  fetchRequest({
    url: `https://api.github.com/users/${name}/repos`,
    method: "GET",
  })(requestSuccess)(requestFailed)(dispatch);
};

export const repoSelector = (state: any) => state[STATE_KEY];

export default repoSlice.reducer;

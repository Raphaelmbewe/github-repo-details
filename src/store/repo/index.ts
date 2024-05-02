// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { create } from 'zustand';
import { fetchRequest } from "../../config/axios";

type RepoStore = {
  isLoading: boolean;
  repos: [],
  success: string | null,
  error: string | null,
  getRepo: (name: string) => void;
};

const initialState: RepoStore = {
  isLoading: false,
  repos: [],
  success: null,
  error: null,
};

export const useRepoStore = create<RepoStore>((set) =>({
  ...initialState,
  getRepo: async (name: string) =>{
 set({isLoading: true, error: null, success: null});
  try {
    const response = await fetchRequest({
      url: `https://api.github.com/users/${name}/repos`,
      method: "GET",
    });
    set({ isLoading: false, repos: response.response, success: response.response?.message });
  } catch (error) {
    set({ isLoading: false, error: error?.message});
  }
  }
}));


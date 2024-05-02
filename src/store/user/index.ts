/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { create } from "zustand";
import { fetchRequest } from "../../config/axios";

type User = {
  name: string;
  location: string;
  created: string;
  updated: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  following: number;
  followers: number;
  created_at: string;
  updated_at: string;
};

type UserStore = {
  isLoading: boolean;
  data: User | undefined;
  success: string | null;
  error: string | null;
  getUser: (name:string) => void;
}

const initialState: UserStore= {
  isLoading: false,
  data: undefined,
  success: null,
  error: null,
};
 export const useUserStore = create<UserStore>((set) => ({
  ...initialState,
  getUser: async (name:string) =>{
 set({isLoading:true, error:null, success: null})
 try {
  const response = await fetchRequest({
    url: `https://api.github.com/users/${name}`,
    method: "GET",
  });
  set({ isLoading: false, data: response.response, success: response.response?.message });
 } catch (error) {
  set({ isLoading: false, error: error?.message});
 }
  }
 }));


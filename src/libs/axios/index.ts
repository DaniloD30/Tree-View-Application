import axios from "axios";

export const baseApi = axios.create({
  baseURL: import.meta.env.VITE_TRACTIAN_BASE_API_URL,
  headers: {
    "Content-Type": " application/json",
  },
});

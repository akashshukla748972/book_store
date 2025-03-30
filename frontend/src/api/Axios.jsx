import axios from "axios";

export const Axios = axios.create({
  baseURL: import.meta.env.VITE_BOOK_STORE_API_URL,
});

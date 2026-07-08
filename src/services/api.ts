import axios from "axios";

export const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "https://raw.githubusercontent.com/cellsia/mini-nucleiq-code-challenge/main/",
  timeout: 10000, // Timeout requests after 10 seconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

import axios from "axios";

export const api = axios.create({
  baseURL: "https://explorer-api-90x6.onrender.com",
  withCredentials: true
});
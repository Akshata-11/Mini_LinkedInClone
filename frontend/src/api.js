import axios from "axios";

const API = axios.create({
  baseURL: "https://mini-linked-in-clone.vercel.app/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = token;
  return req;
});

export default API;

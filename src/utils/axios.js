import axios from "axios";

const api = axios.create({
  baseURL: "https://techinfo.uz/api",
});

export default api;

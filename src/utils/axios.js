import axios from "axios";

const api = axios.create({
  baseURL: "https://techinfo.uz/api",
});

export default api;
    baseURL: "https://techinfo.uz/api",
    headers: {
        "Content-Type": "application/json"
    }
})

export default api;

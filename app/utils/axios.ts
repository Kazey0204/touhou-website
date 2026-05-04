import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://69f89f73f7044aa0103e2d84.mockapi.io", 
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
import axios from "axios";
import Endpoints from "./endpoints";

const axiosInstance = axios.create({
  baseURL: "https://marina-backender.org.kg/cookscorner/",
  headers: {
    "Content-Type": "application/json",
  },
});

const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');

  const {data} = await axiosInstance.post('/users/login/refresh/', {refresh: refreshToken});
  console.log(data)
  localStorage.setItem("accessToken", data.access)
  // localStorage.setItem("refreshToken", data.refresh)
};

// refreshAccessToken()

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken'); // Retrieve the token from storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use((config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          console.log('refresh', error)
          // refreshAccessToken()
          return axiosInstance(originalRequest);
        } catch (refreshError: any) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          console.log("not authorized")
          throw refreshError
        }
    }
    return Promise.reject(error);
});

export default axiosInstance

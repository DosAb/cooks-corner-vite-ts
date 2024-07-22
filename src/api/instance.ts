import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://marina-backender.org.kg/cookscorner/",
  headers: {
    "Content-Type": "application/json",
  },
});

// axiosInstance.interceptors.request.use((config) => {
//     console.log(config)
//     const token = localStorage.getItem('accessToken'); // Retrieve the token from storage
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
// axiosInstance.interceptors.response.use((config) => {
//     return config;
//   },
//   (error) => {
//     const originalRequest = error.config
//     if(error.response.status == 401 && error.config && !error.config._isRetry){
//       originalRequest._isRetry = true
//       //Refresh function
//     }
//     throw error
//   });

// export const getCategory = (token, category, page) => axiosInstance.get(`recipes/by-category/?category=${category}&page=${page}&limit=10`,{
//   headers: {
//     Authorization: `Bearer ${token}`
//   }
// });

export default axiosInstance

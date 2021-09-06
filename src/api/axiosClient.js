import axios from "axios";
import queryString from "query-string";
import LocalStorageService from "../store/localStorageService";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = LocalStorageService.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  }
  // (error) => {
  //   const originalRequest = error.config;
  //   if (error?.response?.status === 401 && !originalRequest?._retry) {
  //     originalRequest._retry = true;
  //     return axios
  //       .post(`${process.env.REACT_APP_API_SERVER}/refresh_token`, {
  //         refresh_token: LocalStorageService.getRefreshToken(),
  //       })
  //       .then((res) => {
  //         if (res.status === 201) {
  //           // 1) put token to LocalStorage
  //           LocalStorageService.setToken(res.data);

  //           // 2) Change Authorization header
  //           axios.defaults.headers.common.Authorization =
  //             "Bearer " + LocalStorageService.getAccessToken();

  //           // 3) return originalRequest object with Axios.
  //           return axios(originalRequest);
  //         }
  //       });
  //   }
  //   return Promise.reject(error);
  // }
);

export default axiosClient;

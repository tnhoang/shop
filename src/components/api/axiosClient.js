import axios from "axios";
import queryString from "query-string";

// Set up default for http request
const axiosClient = axios.create({
  // baseURL: process.env.BACKEND_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here...
  return config;
});

axiosClient.interceptors.response.use(
  (res) => {
    if (res && res.data) {
      return res.data;
    }
    return res;
  },
  (error) => {
    // Handle errors...
    throw error;
  }
);

export default axiosClient;

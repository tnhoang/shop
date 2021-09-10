const ACCESS_TOKEN = "access_token";
const REFRESH_TOKEN = "refresh_tokens";

const LocalStorageService = {
  getAccessToken: () => {
    return localStorage.getItem(ACCESS_TOKEN);
  },

  getRefreshToken: () => {
    return localStorage.getItem(REFRESH_TOKEN);
  },

  setToken: ({ access_token, refresh_token }) => {
    localStorage.setItem(ACCESS_TOKEN, access_token);
    localStorage.setItem(REFRESH_TOKEN, refresh_token);
  },

  clearToken: () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  },
};

export default LocalStorageService;

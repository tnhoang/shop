const AccessToken = "access_token";
const RefreshToken = "refresh_tokens";

const LocalStorageService = {
  getAccessToken: () => {
    return localStorage.getItem(AccessToken);
  },

  getRefreshToken: () => {
    return localStorage.getItem(RefreshToken);
  },

  setToken: ({ access_token, refresh_token }) => {
    localStorage.setItem(AccessToken, access_token);
    localStorage.setItem(RefreshToken, refresh_token);
  },

  clearToken: () => {
    localStorage.removeItem(AccessToken);
    localStorage.removeItem(RefreshToken);
  },
};

export default LocalStorageService;

import axiosClient from "./axiosClient";
import LocalStorageService from "./localStorageService";

const delay = async (time) => {
  await new Promise((res) => setTimeout(res, time));
};

export const getAllBooks = async () => {
  await delay(1000);
  return [1, 2, 3];
};

export const authentication = async () => {
  const [username, password] = ["qwe", "password"];
  const response = await axiosClient.post(
    `${process.env.REACT_APP_API_SERVER}/login`,
    {
      username: username,
      password: password,
    }
  );

  const obj = {
    access_token: response.data.access_token,
    refresh_token: response.data.refresh_token,
  };

  LocalStorageService.setToken(obj);
};

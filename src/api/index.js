import axiosClient from "./axiosClient";
import LocalStorageService from "../store/localStorageService";

const delay = async (time) => {
  await new Promise((res) => setTimeout(res, time));
};
const randomRange = (min, max) => Math.floor(Math.random() * max) + min;
const randomStar = () => randomRange(1, 5);
const randomRatingCount = () => randomRange(1, 200);
const titles = [
  "Monstera DK Var (L)",
  "Monstera Deliciosa",
  "Monstera DK Var (L)",
  "Monstera Deliciosa",
];

export const getAllBooks = async () => {
  await delay(50);
  return titles.map((title) => ({
    title,
    rating: randomStar(),
    ratingCount: randomRatingCount(),
    price: randomRange(1, 1000),
  }));
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

import axiosClient from "./axiosClient";

export const getAllProducts = async () => {
  try {
    const { data } = await axiosClient.get("products");
    return data;
  } catch (error) {
    throw Error(error.message);
  }
};

export const signIn = async ({ username, password }) => {
  try {
    const { data } = await axiosClient.post("authen/sign_in", {
      username,
      password,
    });
    return data;
  } catch (error) {
    throw Error(error.message);
  }
};

export const signUp = async ({ username, password }) => {
  try {
    const { data } = await axiosClient.post("authen/sign_up", {
      username,
      password,
    });
    return data;
  } catch (error) {
    throw Error(error);
  }
};

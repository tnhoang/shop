import axiosClient from "./axiosClient";
import LocalStorageService from "./localStorageService";

export const getAllBooks = async () => {
  const response = await axiosClient.get(`${process.env.REACT_APP_API_SERVER}`);

  if (response.status !== 200) {
    throw new Error("Something went wrong.");
  }

  return response.data;
};

export const authentication = async () => {
  const [username, password] = ["qwe", "password"];
  const response = await axiosClient.post("http://0.0.0.0:8002/login", {
    username: username,
    password: password,
  });

  const obj = {
    access_token: response.data.access_token,
    refresh_token: response.data.refresh_token,
  };

  LocalStorageService.setToken(obj);
};

export const getBook = async ({ queryKey }) => {
  /* eslint-disable no-unused-vars */
  const [_key, { id }] = queryKey;
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}/books/${id}`
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

export const updateBook = async ({ id, ...data }) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}/books/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

export const createBook = async ({ ...data }) => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

export const removeBook = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}/books/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return true;
};

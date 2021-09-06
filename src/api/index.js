import axiosClient from "./axiosClient";

const delay = async (time) => {
  await new Promise((res) => setTimeout(res, time));
};
// const randomRange = (min, max) => Math.floor(Math.random() * max) + min;
// const randomStar = () => randomRange(1, 5);
// const randomRatingCount = () => randomRange(1, 200);
// const titles = [
//   "Monstera DK Var (L)",
//   "Monstera Deliciosa",
//   "Monstera DK Var (L)",
//   "Monstera Deliciosa",
// ];

export const getAllBooks = async () => {
  await delay(1000);
  const res = await axiosClient.get(`${process.env.REACT_APP_API_SERVER}`);
  console.log(res);
  // return titles.map((title) => ({
  //   title,
  //   rating: randomStar(),
  //   ratingCount: randomRatingCount(),
  //   price: randomRange(1, 1000),
  // }));
};

// export const authentication = async ({ username, password }) => {
//   const response = await axiosClient.post(
//     `${process.env.REACT_APP_API_SERVER}/login`,
//     {
//       username: username,
//       password: password,
//     }
//   );

//   const obj = {
//     access_token: response.data.access_token,
//     refresh_token: response.data.refresh_token,
//   };

//   LocalStorageService.setToken(obj);
// };

export const signIn = async ({ username, password }) => {
  try {
    console.log(123);
    const { data } = await axiosClient.post(
      `${process.env.REACT_APP_API_URL}/authen/sign_in`,
      {
        username,
        password,
      }
    );
    return data;
  } catch (error) {
    throw Error(error.message);
  }
};

export const signUp = async ({ username, password }) => {
  try {
    const { data } = await axiosClient.post(
      `${process.env.REACT_APP_API_URL}/authen/sign_up`,
      {
        username,
        password,
      }
    );
    return data;
  } catch (error) {
    throw Error(error);
  }
};

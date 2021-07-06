import axiosClient from "./axiosClient";

class ProductApi {
  getAll = async (params) => {
    const url = "https://run.mocky.io/v3/5a7400b1-d41b-4d63-b5e6-ecf06a4ed1c3";
    return await axiosClient.get(url, { params });
  };
}

const productApi = new ProductApi();
export default productApi;

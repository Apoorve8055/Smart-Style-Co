import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getProductCategory = () => {
  const result = axiosInstance.get("/products/categories");
  return result;
};

export const getProductList = () => {
  const result = axiosInstance.get("/products");
  return result;
};

export const getProductById = (id) => {
  const result = axiosInstance.get("/products/" + id);
  return result;
};

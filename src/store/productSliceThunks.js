import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getProductById,
  getProductCategory,
  getProductList,
} from "../services/api";

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const response = await getProductById(id);
    return response.data;
  }
);

export const fetchProductCategory = createAsyncThunk(
  "product/fetchProductCategory",
  async () => {
    const response = await getProductCategory();
    return response.data;
  }
);

export const fetchProductList = createAsyncThunk(
  "product/fetchProductList",
  async () => {
    const response = await getProductList();
    return response.data;
  }
);

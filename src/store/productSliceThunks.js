import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductById } from "../services/api";

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const response = await getProductById(id);
    return response.data;
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (category: string = "", thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:3001/products?category=${category}`
      );
      const data = await response.json();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(`${e}` + " Ошибка загрузки данных");
    }
  }
);

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(`${e}` + " Ошибка загрузки данных");
    }
  }
);

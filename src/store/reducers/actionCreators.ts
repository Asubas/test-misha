import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (category: string = "", thunkAPI) => {
    try {
      const response = await fetch(
        category
          ? `http://localhost:3001/products?category=${category}`
          : "`http://localhost:3001/products"
      );
      const data = await response.json();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(`${e}` + " Ошибка загрузки данных");
    }
  }
);

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/productInterface";
import { fetchAllProducts, fetchProducts } from "./actionCreators";

interface ProductState {
  products: IProduct[];
  allProducts: IProduct[];
  isLoading: boolean;
  error: string | unknown;
}

const initialState: ProductState = {
  products: [],
  allProducts: [],
  isLoading: false,
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<IProduct[]>) => {
          state.isLoading = false;
          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(
        fetchAllProducts.fulfilled,
        (state, action: PayloadAction<IProduct[]>) => {
          state.isLoading = false;
          state.allProducts = action.payload;
        }
      );
  },
});

export default productsSlice.reducer;

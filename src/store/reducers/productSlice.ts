import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/productInterface";
import { fetchAllProducts, fetchProducts } from "./actionCreators";

interface ProductState {
  products: IProduct[];
  allProducts: IProduct[];
  favorites: number[];
  isLoading: boolean;
  error: string | unknown;
}

const initialState: ProductState = {
  products: [],
  allProducts: [],
  favorites: [],
  isLoading: false,
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToFavorite(state, action) {
      const someProduct = state.favorites.some(
        (id) => id === action.payload.id
      );
      if (!someProduct) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorite(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
  },
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

export const { addToFavorite, removeFromFavorite } = productsSlice.actions;
export default productsSlice.reducer;

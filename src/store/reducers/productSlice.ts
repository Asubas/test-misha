import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/productInterface";
import { fetchProducts } from "./actionCreators";

interface ProductState {
  products: IProduct[];
  favorites: IProduct[];
  isLoading: boolean;
  error: string | unknown;
}

const initialState: ProductState = {
  products: [],
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
        (product) => product.id === action.payload.id
      );
      if (!someProduct) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorite(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter(
        (product) => product.id !== action.payload
      );
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
      });
  },
});

export const { addToFavorite, removeFromFavorite } = productsSlice.actions;
export default productsSlice.reducer;

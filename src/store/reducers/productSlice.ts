import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/productInterface";

interface ProductState {
  products: IProduct[];
  favorites: IProduct[];
}

const productsSlice = createSlice({
  name: "products",
  initialState: {
    // elements: await getProducts(),
    products: [],
    favorites: [],
  } as ProductState,
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
});

export const { addToFavorite, removeFromFavorite } = productsSlice.actions;
export default productsSlice.reducer;

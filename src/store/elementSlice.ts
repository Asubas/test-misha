import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../utils/getProducts";
import { IProduct } from "../types/productInterface";

interface ElementState {
  elements: IProduct[];
  favorites: IProduct[];
}

const elementSlice = createSlice({
  name: "element",
  initialState: {
    elements: await getProducts(),
    favorites: [],
  } as ElementState,
  reducers: {
    addToFavorite(state, action) {
      const someProduct = state.favorites.some(
        (product) => product.id === action.payload.id
      );
      if (!someProduct) {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const { addToFavorite } = elementSlice.actions;
export default elementSlice.reducer;

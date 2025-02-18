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
      // state.favorites.push(action);
    },
  },
});

export const { addToFavorite } = elementSlice.actions;
export default elementSlice.reducer;

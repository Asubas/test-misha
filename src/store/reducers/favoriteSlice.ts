import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const favoritesIDlice = createSlice({
  name: "favoritesID",
  initialState: {
    favoritesID: [] as number[],
  },
  reducers: {
    addToFavorite(state, action) {
      const someProduct = state.favoritesID.some(
        (id) => id === action.payload.id
      );
      if (!someProduct) {
        state.favoritesID.push(action.payload);
      }
    },
    removeFromFavorite(state, action: PayloadAction<number>) {
      state.favoritesID = state.favoritesID.filter(
        (id) => id !== action.payload
      );
    },
  },
});
export const { addToFavorite, removeFromFavorite } = favoritesIDlice.actions;
export default favoritesIDlice.reducer;

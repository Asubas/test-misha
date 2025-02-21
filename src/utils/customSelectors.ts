import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectFavoritesID = (state: RootState) => state.favorites.favoritesID;

export const selectIsFavorite = (productId: number) =>
  createSelector(selectFavoritesID, (favoritesID) =>
    favoritesID.includes(productId)
  );

import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productSlice";
import favoritesIDReducer from "./reducers/favoriteSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    favorites: favoritesIDReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

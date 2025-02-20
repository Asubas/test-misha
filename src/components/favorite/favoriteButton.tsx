import styles from "./favoriteButton.module.scss";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../hooks";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../store/reducers/favoriteSlice";

export function FavoriteButton({ id }: { id: number }) {
  const favoriteProducts = useAppSelector((state) =>
    state.favorites.favoritesID.includes(id)
  );

  const dispatch = useDispatch();
  const addedToFavorite = () => {
    if (favoriteProducts) {
      dispatch(removeFromFavorite(id));
    } else {
      dispatch(addToFavorite(id));
    }
  };

  return (
    <button
      className={
        favoriteProducts
          ? `${styles.like} ${styles.favorite}`
          : `${styles.favorite}`
      }
      onClick={addedToFavorite}
    />
  );
}

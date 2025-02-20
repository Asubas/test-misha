import styles from "./favoriteButton.module.scss";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../hooks";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../store/reducers/favoriteSlice";

export function FavoriteButton({ id }: { id: number }) {
  const isFavorite = useAppSelector((state) =>
    state.favorites.favoritesID.includes(id)
  );

  const dispatch = useDispatch();
  const addedToFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(id));
    } else {
      dispatch(addToFavorite(id));
    }
  };

  return (
    <button
      className={
        isFavorite ? `${styles.like} ${styles.favorite}` : `${styles.favorite}`
      }
      onClick={addedToFavorite}
    />
  );
}

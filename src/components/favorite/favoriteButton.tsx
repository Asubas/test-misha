import styles from "./favoriteButton.module.scss";
import { useDispatch } from "react-redux";

import {
  addToFavorite,
  removeFromFavorite,
} from "../../store/reducers/favoriteSlice";

export function FavoriteButton({
  id,
  isFavorite,
}: {
  id: number;
  isFavorite: boolean;
}) {
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

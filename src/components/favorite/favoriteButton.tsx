import styles from "./favoriteButton.module.scss";
import { useDispatch } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../store/reducers/productSlice";
import { useAppSelector } from "../../hooks";

export function FavoriteButton({ id }: { id: number }) {
  const favoriteProducts = useAppSelector((state) => state.products.favorites);

  const dispatch = useDispatch();
  const addedToFavorite = () => {
    if (favoriteProducts.includes(id)) {
      dispatch(removeFromFavorite(id));
    } else {
      dispatch(addToFavorite(id));
    }
  };

  return (
    <button
      className={
        favoriteProducts.includes(id)
          ? `${styles.like} ${styles.favorite}`
          : `${styles.favorite}`
      }
      onClick={addedToFavorite}
    />
  );
}

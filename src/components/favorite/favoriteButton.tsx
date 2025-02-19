import styles from "./favoriteButton.module.scss";
import { useDispatch } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../../store/productSlice";
import { IProduct } from "../../types/productInterface";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";

export function FavoriteButton({ product }: { product: IProduct }) {
  const favoriteProducts = useAppSelector((state) => state.products.favorites);

  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  const addedToFavorite = () => {
    if (like) {
      dispatch(removeFromFavorite(product.id));
    } else {
      dispatch(addToFavorite(product));
    }
    setLike((val) => !val);
  };

  useEffect(() => {
    if (favoriteProducts.includes(product)) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, [favoriteProducts, product]);
  return (
    <button
      className={
        like ? `${styles.like} ${styles.favorite}` : `${styles.favorite}`
      }
      onClick={addedToFavorite}
    />
  );
}

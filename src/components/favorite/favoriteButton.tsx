import "./favoriteButton.css";
import { useDispatch } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../../store/elementSlice";
import { IProduct } from "../../types/productInterface";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";

export function FavoriteButton({ product }: { product: IProduct }) {
  const favoriteProducts = useAppSelector((state) => state.elements.favorites);

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
      className={like ? "likeProduct addToFavorite" : "addToFavorite"}
      onClick={addedToFavorite}
    />
  );
}

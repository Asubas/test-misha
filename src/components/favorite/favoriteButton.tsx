import { useDispatch } from "react-redux";
import { addToFavorite } from "../../store/elementSlice";
import { IProduct } from "../../types/productInterface";

export function FavoriteButton({ product }: { product: IProduct }) {
  const dispatch = useDispatch();
  const addedToFavorite = () => {
    dispatch(addToFavorite(product));
  };
  return <button onClick={addedToFavorite}>Добавить в избранное</button>;
}

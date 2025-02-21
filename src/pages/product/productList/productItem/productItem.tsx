import styles from "./productItem.module.scss";
import { memo } from "react";
import { useSelector } from "react-redux";
import { FavoriteButton } from "../../../../components/favorite/favoriteButton";
import { IProduct } from "../../../../types/productInterface";
import { RootState } from "../../../../store";
import { selectIsFavorite } from "../../../../utils/customSelectors";

export const ProductItem = memo(({ product }: { product: IProduct }) => {
  const isFavorite = useSelector(
    (state: RootState) => selectIsFavorite(product.id)(state),
    (prev, next) => prev === next
  );
  return (
    <li className={styles.item} key={product.id}>
      {product.name}
      <p>{product.description}</p>
      <p>{product.price} руб</p>
      <FavoriteButton id={product.id} isFavorite={isFavorite} />
    </li>
  );
});

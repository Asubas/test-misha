import styles from "./basket.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { removeFromFavorite } from "../../../store/reducers/productSlice";
import { useEffect } from "react";
import { fetchAllProducts } from "../../../store/reducers/actionCreators";

export function Basket({ activeBasket }: { activeBasket: boolean }) {
  const { allProducts, favorites } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const removeProduct = (id: number) => {
    dispatch(removeFromFavorite(id));
  };

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const favoriteProducts = allProducts.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <>
      <div
        className={
          activeBasket ? styles.basket : `${styles.active} ${styles.basket}`
        }
      >
        <p className={styles.title}>Избранные продукты</p>
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((product) => (
            <div className={styles.product} key={product.id}>
              <span className={styles.name}>{product.name}</span>
              <span className={styles.price}>{product.price} руб</span>
              <button
                className={styles.remove}
                onClick={() => removeProduct(product.id)}
              />
            </div>
          ))
        ) : (
          <p className={styles.empty}>Нет избранных продуктов</p>
        )}
      </div>
    </>
  );
}

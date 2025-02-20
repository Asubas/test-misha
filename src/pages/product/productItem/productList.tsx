import styles from "./productsList.module.scss";
import { FavoriteButton } from "../../../components/favorite/favoriteButton";
import { IProduct } from "../../../types/productInterface";

export function ProductList({ products }: { products: IProduct[] }) {
  return (
    <>
      <ul className={styles.list}>
        {products.map((product) => (
          <li className={styles.item} key={product.id}>
            {product.name}
            <p>{product.description}</p>
            <p>{product.price} руб</p>
            <FavoriteButton id={product.id} />
          </li>
        ))}
      </ul>
    </>
  );
}

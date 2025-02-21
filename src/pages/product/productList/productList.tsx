import styles from "./productsList.module.scss";
import { IProduct } from "../../../types/productInterface";
import { ProductItem } from "./productItem/productItem";

export function ProductList({ products }: { products: IProduct[] }) {
  return (
    <ul className={styles.list}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

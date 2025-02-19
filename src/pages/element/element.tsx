import styles from "./element.module.scss";
import { useParams } from "react-router";
import { useEffect, useMemo, useState } from "react";
import { Pagination } from "../../components/pagination/pagination";
import { Sort } from "../../components/sort/sort";
import { FavoriteButton } from "../../components/favorite/favoriteButton";
import { useAppSelector } from "../../hooks";
import { IProduct } from "../../types/productInterface";

export function Element() {
  const params = useParams();
  const allProducts = useAppSelector((state) => state.products.products);
  const products = useMemo(() => {
    return allProducts.filter((product) => product.category === params.element);
  }, [allProducts, params.element]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedProducts, setSortedProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setSortedProducts(products);
    setCurrentPage(1);
  }, [products]);

  const itemsPerPage = 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  return (
    <>
      {products.length > 0 ? (
        <div className={styles.wrapper}>
          <Sort
            prod={products}
            sortProducts={(sorted) => {
              setSortedProducts(sorted);
              setCurrentPage(1);
            }}
          />
          <ul className={styles.list}>
            {currentProducts.map((product) => (
              <li className={styles.item} key={product.id}>
                {product.name}
                <p className={styles.description}>{product.description}</p>
                <p className={styles.price}>{product.price} руб</p>
                <FavoriteButton product={product} />
              </li>
            ))}
          </ul>
          <Pagination
            currentPage={currentPage}
            totalPosts={products.length}
            paginate={(page: number) => setCurrentPage(page)}
          />
        </div>
      ) : (
        <div>Список пуст!</div>
      )}
    </>
  );
}

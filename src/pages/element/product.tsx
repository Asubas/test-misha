import styles from "./product.module.scss";
import { useEffect } from "react";
import { Pagination } from "../../components/pagination/pagination";
import { Sort } from "../../components/sort/sort";
// import { FavoriteButton } from "../../components/favorite/favoriteButton";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchProducts } from "../../store/reducers/actionCreators";
import { useParams } from "react-router";
import { usePagination } from "../../utils/usePagination";
import { useSortProducts } from "../../utils/useSortProducts";

export function Product() {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(
    (state) => state.products
  );
  const params = useParams();
  const { sortedProducts, sortByName, sortByPrice } = useSortProducts(products);
  const { currentItems, currentPage, setCurrentPage } = usePagination(
    sortedProducts,
    4
  );

  useEffect(() => {
    if (params.element) dispatch(fetchProducts(params.element));
    setCurrentPage(1);
  }, [dispatch, params.element, setCurrentPage]);

  if (isLoading) return <h1>Идет загрузка...</h1>;
  if (error) return <h1>Ошибка загрузки данных</h1>;
  return (
    <>
      {products.length > 0 ? (
        <div className={styles.wrapper}>
          <Sort sortByName={sortByName} sortByPrice={sortByPrice} />
          <ul className={styles.list}>
            {currentItems.map((product) => (
              <li className={styles.item} key={product.id}>
                {product.name}
                <p className={styles.description}>{product.description}</p>
                <p className={styles.price}>{product.price} руб</p>
                {/* <FavoriteButton product={product} /> */}
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

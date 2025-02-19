import styles from "./element.module.scss";
import { useEffect } from "react";
// import { Pagination } from "../../components/pagination/pagination";
// import { Sort } from "../../components/sort/sort";
// import { FavoriteButton } from "../../components/favorite/favoriteButton";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchProducts } from "../../store/reducers/actionCreators";
import { useParams } from "react-router";

export function Element() {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(
    (state) => state.products
  );
  const params = useParams();
  // const [currentPage, setCurrentPage] = useState(1);
  // const [sortedProducts, setSortedProducts] = useState<IProduct[]>([]);

  // useEffect(() => {
  //   setSortedProducts(filteredProducts);
  //   setCurrentPage(1);
  // }, [filteredProducts]);

  useEffect(() => {
    if (params.element) dispatch(fetchProducts(params.element));
  }, [dispatch, params.element]);

  // const itemsPerPage = 4;
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const currentProducts = sortedProducts.slice(startIndex, endIndex);

  return (
    <>
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>Ошибка загрузки данных</h1>}
      {products.length > 0 ? (
        <div className={styles.wrapper}>
          {/* <Sort
            prod={products}
            sortProducts={(sorted) => {
              setSortedProducts(sorted);
              setCurrentPage(1);
            }}
          /> */}
          <ul className={styles.list}>
            {products.map((product) => (
              <li className={styles.item} key={product.id}>
                {product.name}
                <p className={styles.description}>{product.description}</p>
                <p className={styles.price}>{product.price} руб</p>
                {/* <FavoriteButton product={product} /> */}
              </li>
            ))}
          </ul>
          {/* <Pagination
            currentPage={currentPage}
            totalPosts={products.length}
            paginate={(page: number) => setCurrentPage(page)}
          /> */}
        </div>
      ) : (
        <div>Список пуст!</div>
      )}
    </>
  );
}

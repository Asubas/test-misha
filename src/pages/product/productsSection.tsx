import styles from "./productsSection.module.scss";
import { useEffect } from "react";
import { Pagination } from "../../components/pagination/pagination";
import { Sort } from "../../components/sort/sort";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchProducts } from "../../store/reducers/actionCreators";
import { useParams } from "react-router";
import { usePagination } from "../../utils/usePagination";
import { useSortProducts } from "../../utils/useSortProducts";
import { ProductList } from "./productList/productList";

export function ProductsSection() {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(
    (state) => state.products
  );
  const params = useParams();
  const { sortedProducts, sortByName, sortByPrice } = useSortProducts(products);
  const { currentProducts, currentPage, setCurrentPage } = usePagination(
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
      {products ? (
        <div className={styles.wrapper}>
          <Sort sortByName={sortByName} sortByPrice={sortByPrice} />
          <ProductList products={currentProducts} />
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

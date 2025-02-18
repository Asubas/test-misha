import "./element.css";
import { useParams } from "react-router";
// import { getProducts } from "../../utils/getProducts";
// import { useEffect, useState } from "react";
// import { IProduct } from "../../types/productInterface";
// import { Pagination } from "../../components/pagination/pagination";
// import { Sort } from "../../components/sort/sort";
import { FavoriteButton } from "../../components/favorite/favoriteButton";
import { useAppSelector } from "../../hooks";

export function Element() {
  const products = useAppSelector((state) => state.elements.elements);
  const params = useParams();
  // const currentProduct = params;
  // const [page, setCurrentPage] = useState(1);
  // const [sortedProducts, setSortedProducts] = useState<IProduct[]>([]);
  // const startIndex = (page - 1) * 4;
  // const endIndex = startIndex + 4;
  // const currentProducts = sortedProducts.slice(startIndex, endIndex);

  // useEffect(() => {
  //   if (currentProduct) {
  //     getProducts(currentProduct)
  //       .then(async (data) => {
  //         setSortedProducts(data);
  //         setCurrentPage(1);
  //       })
  //       .catch((error) => {
  //         console.error("Ошибка при загрузке данных:", error);
  //       });
  //   }
  // }, [currentProduct]);

  return (
    <>
      {products.length > 0 ? (
        <div className="elementWrapper">
          {/* <Sort
            prod={products}
            sortProducts={(sorted: IProduct[]) => {
              setSortedProducts(sorted);
              setCurrentPage(1);
            }}
          /> */}
          <ul className="elementList">
            {products
              .filter((product) => product.category === params.element)
              .map((product) => (
                <li className="productItem" key={product.id}>
                  {product.name}
                  <p className="productDescription">{product.description}</p>
                  <p className="productPrice">{product.price} руб</p>
                  <FavoriteButton />
                </li>
              ))}
          </ul>
          {/* <Pagination
            currentPage={page}
            totalPosts={sortedProducts.length}
            paginate={(page: number) => setCurrentPage(page)}
          /> */}
        </div>
      ) : (
        <div>Список пуст!</div>
      )}
    </>
  );
}

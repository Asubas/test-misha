import "./element.css";
import { useParams } from "react-router";
import { getProducts } from "../../utils/getProducts";
import { useEffect, useState } from "react";
import { IProduct } from "../../types/productInterface";
import { Pagination } from "../../components/pagination/pagination";

export function Element() {
  const params = useParams();
  const currentProduct = params.element;
  const [products, setProducts] = useState<IProduct[]>([]);
  const [page, setCurrentPage] = useState(1);
  const startIndex = (page - 1) * 4;
  const endIndex = startIndex + 4;
  const currentProducts = products.slice(startIndex, endIndex);

  useEffect(() => {
    if (currentProduct) {
      getProducts(currentProduct)
        .then(async (data) => {
          setProducts(data);
        })
        .catch((error) => {
          console.error("Ошибка при загрузке данных:", error);
        });
    }
  }, [currentProduct]);

  return (
    <>
      {products.length > 0 ? (
        <div className="elementWrapper">
          <ul className="elementList">
            {currentProducts.map((product) => (
              <li className="productItem" key={product.id}>
                {product.name}
                <p className="productDescription">{product.description}</p>
                <p className="productPrice">{product.price} руб</p>
              </li>
            ))}
          </ul>
          <Pagination
            currentPage={page}
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

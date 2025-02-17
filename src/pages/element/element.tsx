import { useParams } from "react-router";
import { getProducts } from "../../utils/getProducts";
import { useEffect, useState } from "react";
import { IProduct } from "../../types/productInterface";

export function Element() {
  const params = useParams();
  const currentProduct = params.element;
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (currentProduct) {
      getProducts(currentProduct)
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => {
          console.error("Ошибка при загрузке данных:", error);
        });
    }
  }, [currentProduct]);

  return (
    <>
      <h1>element {currentProduct}</h1>
      {products.length > 0 ? (
        <div>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>Список пуст!</div>
      )}
    </>
  );
}

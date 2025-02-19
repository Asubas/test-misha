import { useEffect, useState } from "react";
import { IProduct } from "../types/productInterface";

export function useSortProducts(products: IProduct[]) {
  const [sortedProducts, setSortedProducts] = useState<IProduct[]>(products);
  const [sortOrder, setSortOrder] = useState<{
    field: string | null;
    direction: "asc" | "desc" | null;
  }>({
    field: null,
    direction: null,
  });
  const sortByName = () => {
    const direction =
      sortOrder.field === "name" && sortOrder.direction === "asc"
        ? "desc"
        : "asc";
    const sortArray = [...products].sort((a, b) =>
      direction === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setSortOrder({ field: "name", direction });
    setSortedProducts(sortArray);
  };

  const sortByPrice = () => {
    const direction =
      sortOrder.field === "price" && sortOrder.direction === "asc"
        ? "desc"
        : "asc";
    const sortArray = [...products].sort((a, b) =>
      direction === "asc" ? a.price - b.price : b.price - a.price
    );
    setSortOrder({ field: "price", direction });
    setSortedProducts(sortArray);
  };

  useEffect(() => {
    setSortedProducts(products);
  }, [products]);
  return {
    sortedProducts,
    sortByName,
    sortByPrice,
  };
}

import { useState } from "react";
import { IProduct } from "../types/productInterface";

export const usePagination = (products: IProduct[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return { currentProducts, currentPage, setCurrentPage };
};

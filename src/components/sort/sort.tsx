import styles from "./sort.module.scss";
import { IProduct } from "../../types/productInterface";
import { useState } from "react";

export function Sort({
  sortProducts,
  prod,
}: {
  sortProducts: (product: IProduct[]) => void;
  prod: IProduct[];
}) {
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
    const sortArray = [...prod].sort((a, b) =>
      direction === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setSortOrder({ field: "name", direction });
    sortProducts(sortArray);
  };

  const sortByPrice = () => {
    const direction =
      sortOrder.field === "price" && sortOrder.direction === "asc"
        ? "desc"
        : "asc";
    const sortArray = [...prod].sort((a, b) =>
      direction === "asc" ? a.price - b.price : b.price - a.price
    );
    setSortOrder({ field: "price", direction });
    sortProducts(sortArray);
  };

  return (
    <div className={styles.wrapper}>
      <span>Сортировать по : </span>
      <button className={styles.button} onClick={sortByName}>
        Имя
      </button>
      <button className={styles.button} onClick={sortByPrice}>
        Цена
      </button>
    </div>
  );
}

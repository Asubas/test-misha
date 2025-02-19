import styles from "./sort.module.scss";

export function Sort({
  sortByName,
  sortByPrice,
}: {
  sortByName: () => void;
  sortByPrice: () => void;
}) {
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

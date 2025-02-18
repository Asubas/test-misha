import styles from "./pagination.module.scss";

export function Pagination({
  currentPage,
  totalPosts,
  paginate,
}: {
  currentPage: number;
  totalPosts: number;
  paginate: (page: number) => void;
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / 4); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`${styles.item} ${
                currentPage === number ? styles.activeButton : ""
              }`}
              onClick={() => paginate(number)}
              aria-label={`Перейти на страницу ${number}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

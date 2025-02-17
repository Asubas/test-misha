import "./pagination.css";

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
    <nav className="paginationWrapper">
      <ul className="paginationList">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`paginationItem ${
                currentPage === number ? "activeButton" : ""
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

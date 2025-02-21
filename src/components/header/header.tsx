import styles from "./header.module.scss";
import { Link } from "react-router";

export function Header() {
  return (
    <>
      <header>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link to="/">Сброс</Link>
            </li>
            <li>
              <Link to="/food">Еда</Link>
            </li>
            <li>
              <Link to="/clothes">Одежда</Link>
            </li>
            <li>
              <Link to="/electronics">Электроника</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

import styles from "./header.module.scss";
import { Link } from "react-router";
import { BasketWrapper } from "./basket/basketWrapper";

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
            <li>
              <BasketWrapper />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

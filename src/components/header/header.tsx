import styles from "./header.module.scss";
import { NavLink } from "react-router";
import { BasketWrapper } from "./basket/basketWrapper";

export function Header() {
  return (
    <>
      <header>
        <nav>
          <ul className={styles.nav}>
            <li>
              <NavLink to="/">Сброс</NavLink>
            </li>
            <li>
              <NavLink to="/food">Еда</NavLink>
            </li>
            <li>
              <NavLink to="/clothes">Одежда</NavLink>
            </li>
            <li>
              <NavLink to="/electronics">Электроника</NavLink>
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

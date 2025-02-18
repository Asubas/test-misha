import styles from "./header.module.scss";
import { useState } from "react";
import { NavLink } from "react-router";
import { Basket } from "./basket/basket";

export function Header() {
  const [activeBasket, setActiveBasket] = useState(false);
  const showBasket = () => setActiveBasket((val) => !val);
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
            <li className={styles.basket} onClick={showBasket}>
              Корзина
            </li>
          </ul>
        </nav>
        <Basket activeBasket={activeBasket} />
      </header>
    </>
  );
}

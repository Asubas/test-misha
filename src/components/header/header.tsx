import { useState } from "react";
import "./header.css";
import { NavLink } from "react-router";
import { Basket } from "./basket/basket";

export function Header() {
  const [activeBasket, setActiveBasket] = useState(false);
  const showBasket = () => setActiveBasket((val) => !val);
  return (
    <>
      <header>
        <nav>
          <ul className="navHeader">
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
            <li className="basket" onClick={showBasket}>
              Избранное
            </li>
          </ul>
        </nav>
        <Basket activeBasket={activeBasket} />
      </header>
    </>
  );
}

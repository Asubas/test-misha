import "./header.css";
import { NavLink } from "react-router";

export function Header() {
  const showBasket = () => {
    console.log("показать корзину");
  };
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
              Корзина
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

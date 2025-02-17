import { NavLink } from "react-router";

export function Header() {
  return (
    <>
      <header>This is header</header>
      <nav>
        <ul>
          <li>
            <NavLink to="/food">Еда</NavLink>
          </li>
          <li>
            <NavLink to="/clothes">Одежда</NavLink>
          </li>
          <li>
            <NavLink to="/electronics">Электроника</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

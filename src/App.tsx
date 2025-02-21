import { Outlet, useLocation } from "react-router";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { BasketWrapper } from "./components/header/basket/basketWrapper";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <BasketWrapper />
      {location.pathname === "/" ? (
        <h1>Выберите одну категорию</h1>
      ) : (
        <Outlet />
      )}
      <Footer />
    </>
  );
}

export default App;

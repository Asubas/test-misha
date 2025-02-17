import { Outlet, useLocation } from "react-router";

import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
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

import "./global.scss";
import { StrictMode } from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Product } from "./pages/element/product.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

const root = document.getElementById("root");
ReactDOM.createRoot(root as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path=":element" element={<Product />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

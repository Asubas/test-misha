import "./global.scss";
import { StrictMode } from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Element } from "./pages/element/element.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

const root = document.getElementById("root");
ReactDOM.createRoot(root as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path=":element" element={<Element />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

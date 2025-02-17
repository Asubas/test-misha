import { StrictMode } from "react";
import "./index.css";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Element } from "./pages/element/element.tsx";

const root = document.getElementById("root");
ReactDOM.createRoot(root as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path=":element" element={<Element />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

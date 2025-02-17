import { StrictMode } from "react";
import "./index.css";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { FoodPage } from "./pages/food/food.tsx";
import { ClothesPage } from "./pages/clothes/clothes.tsx";
import { ElectronicsPage } from "./pages/electronics/electronics.tsx";

const root = document.getElementById("root");
ReactDOM.createRoot(root as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="food" element={<FoodPage />} />
          <Route path="clothes" element={<ClothesPage />} />
          <Route path="electronics" element={<ElectronicsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

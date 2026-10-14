import { createRoot } from "react-dom/client";
import ProductList from "./components/ProductList.jsx";
import "./style.css";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(
  <ProductList />
);
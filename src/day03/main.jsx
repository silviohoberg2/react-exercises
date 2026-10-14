import { createRoot } from "react-dom/client";
import Schedule from "./components/Schedule.jsx";
import "./style.css";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(
  <Schedule />
);
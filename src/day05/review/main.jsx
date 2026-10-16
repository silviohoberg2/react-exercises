import { createRoot } from "react-dom/client";
import ParticipantManager from "./ParticipantManager.jsx";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(
  <ParticipantManager />
);
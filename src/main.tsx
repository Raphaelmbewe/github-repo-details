/* eslint-disable no-unused-vars */
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOMClient.createRoot(
  document.getElementById("root") as HTMLElement
).render(
    <App />
);

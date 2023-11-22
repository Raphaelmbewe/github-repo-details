/* eslint-disable no-unused-vars */
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./state";
import "./index.css";

ReactDOMClient.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <Provider store={store}>
    <App />
  </Provider>
);

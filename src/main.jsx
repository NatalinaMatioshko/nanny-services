import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

import "./styles/variables.css";
import "./styles/animations.css";
import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";

import { listenToAuthChanges } from "./store/listenToAuthChanges";
store.dispatch(listenToAuthChanges());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

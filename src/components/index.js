import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from "./Redux/Store/Store";

// Seting the default configuration for cookies for Axios
axios.defaults.withCredentials = true;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

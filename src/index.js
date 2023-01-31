import React from "react";
import {createRoot} from "react-dom/client";
import App from "./app";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App />);

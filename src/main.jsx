import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRounter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Cardapio from "./Pages/Cardapio.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "cardapio",
    element: <Cardapio />
  }
]) 

ReactDOM.createRoot(document.getElementById ("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
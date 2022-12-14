import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./index.css";

import AppRoutes from "./Routes";
import AuthProvider from "./Providers/AuthContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <AuthProvider>
        <Navbar />
        <AppRoutes />
        <Footer />
      </AuthProvider>

    </BrowserRouter>
  </React.StrictMode>
);

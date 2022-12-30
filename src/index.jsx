// Importation des modules & hook
import React from 'react';
import ReactDOM from "react-dom/client";
import {Route, Routes, BrowserRouter} from "react-router-dom"
import reportWebVitals from './reportWebVitals';

// Importation des components Pages
import Home from './pages/Home';
import About from './pages/About';
import Error from "./pages/Error"
import Annonce from './pages/Annonce';

// Importation du CSS
import  "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/annonces/:annonceId" element={<Annonce />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

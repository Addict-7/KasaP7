import React from 'react';
import {Route, Routes, BrowserRouter} from "react-router-dom"
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';


import Home from './pages/Home';
import About from './pages/About';
import Error from "./pages/Error"
import Annonce from './pages/Annonce';




import  "./styles/main.css"

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

import React from 'react';
import reportWebVitals from './reportWebVitals';
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Error from "./pages/Error"
import Annonce from './pages/Annonce';



import  "./styles/App.css"


function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/annonces/:annonceId" element={<Annonce />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
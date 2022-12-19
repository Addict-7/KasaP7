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
            <Route path="/About" element={<About />} />
            <Route path="/Annonce/:id" element={<Annonce />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

/** **/


/**const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/annonces/:annonceId' element={<Annonce/>} />
      <Route path='/404' element={<Error/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);**/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
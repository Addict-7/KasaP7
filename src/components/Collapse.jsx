// Importation du hook useState
import { useState } from "react";

// Importation du CSS
import '../styles/collapse.css';

// Importation de l'image
import arrowdown from "../assets/arrowdown.png";

function Collapse({ title, content }) {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="collapse">
      <div className={`collapse-content ${!isOpen ? "collapse-cont-down" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="collapse-title">{title}</div>
        <img className={`collapse-arrow ${isOpen ? "collapse-arrow-down" : ""}`} src={arrowdown} alt=""/>
      </div>
      <div className={isOpen ? "collapse-text" : "collapse-no-text"}>
        {content}
      </div>
    </div>
  );
}

export default Collapse;
// Importation du hook useState
import { useState } from "react";

// Importation du CSS
import '../styles/collapse.css';

// Importation des images
import arrowdown from "../assets/arrowdown.png";

function Collapse({ content, title }) {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="collapse">
      <div className={`collapse_content ${!isOpen ? "collapse_cont-down" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="collapse_title">{title}</div>
        <img className={`collapse_arrow ${isOpen ? "collapse_arrow-down" : ""}`} src={arrowdown} alt=""/>
      </div>
      <div className={isOpen ? "collapse_text" : "collapse_no-text"}>
        {content}
      </div>
    </div>
  );
}

export default Collapse;
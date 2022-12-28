// Importation du hook useState
import { useState } from "react";

// Importation du CSS
import '../styles/collapse.css';

// Importation de l'image
import arrowdown from "../assets/arrowdown.png";

function Collapse({ title, content, id }) {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="collapse">
      <div className={`collapse-content ${!isOpen ? "collapse-cont-down" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="collapse-title">{title}</div>
        <img className={`collapse-arrow ${isOpen ? "collapse-arrow-down" : ""}`} src={arrowdown} alt=""/>
      </div>
      <div className={isOpen ? "collapse-text" : "collapse-no-text"}>
        {isOpen && typeof content === "string" && (
          <p key={id} className="collapse-string">
            {content}
          </p>
        )}
        {isOpen && Array.isArray(content) && (
          <ul className="equipment">
            {content.map((item, id) => (
                <li key={id} className="collapse-array">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Collapse;
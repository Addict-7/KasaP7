// Importation du CSS
import '../styles/card.css';

// Component pour les cartes des logements
function Card({ title, picture }) {
    
    return(
        <div className="card-content">
            <h2>{title}</h2>
            <img src={picture} alt="Logement" />
        </div>
    );
}

export default Card;
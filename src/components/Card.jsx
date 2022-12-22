// Importation du CSS
import '../styles/card.css';

// Component pour les cartes des logements
function Card({title, picture}) {
    
    return(
        <div className="card-content">
            <h3>{title}</h3>
            <img src={picture} alt="Logement" />
        </div>
    );
}

export default Card;
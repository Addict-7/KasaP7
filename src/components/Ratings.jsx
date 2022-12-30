// Importation des images
import redstar from "../assets/redstar.png"
import greystar from "../assets/greystar.png"

// Importation du CSS
import '../styles/ratings.css';

// Component pour les Ratings (Notes)
function Rating({ rating }) {
    
    const numbers = [1, 2, 3, 4, 5];

    return(
        <div>
            {numbers.map((rate, index) => rating >= rate ? ( 
                <img key={index} src={redstar} alt='Redstar' />
                ) : (
                <img key={index} src={greystar} alt='Greystar' />
                )
            )}
        </div>
    );
}

export default Rating;
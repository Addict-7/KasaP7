// Importation du CSS
import '../styles/ratings.css';

// Importation des images
import redstar from "../assets/redStar.svg"
import greystar from "../assets/greyStar.svg"

function Rating({rating}) {
    
    const numbers = [1, 2, 3, 4, 5];

    return(
        <div>
            {numbers.map((data, index) => rating >= data ? (
                <img key={index} src={redstar} alt="" />
            ) : (
                <img key={index} src={greystar} alt="" />
            ))}
        </div>
    );
}

export default Rating;
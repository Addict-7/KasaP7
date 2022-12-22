// Importation du hook useState
import { useState } from "react";

// Importation du CSS
import '../styles/slider.css';

// Importation des images
import arrowLeft from '../assets/arrowLeft.svg';
import arrowRight from '../assets/arrowRight.svg';

function Slider({pictures}) {

    const [active, setActive] = useState(0);

    const length = pictures.length;

    const rightSlide = () => {
        setActive(active === length - 1 ? 0 : active + 1);
    };

    const leftSlide = () => {
        setActive(active === 0 ? length - 1 : active - 1);
    };

    return (
        <div>
            <div className="slider">
                <img src={arrowLeft} className={`left-slider-arrow`} onClick={leftSlide} alt=""/>
                <img src={pictures[active]} className="slider-img" alt="Logement"  />
                <img src={arrowRight} className={`right-slider-arrow`} onClick={rightSlide} alt=""/>
                <p>{active + 1}/{pictures.length}</p>    
            </div>
        </div>
    );
}

export default Slider;
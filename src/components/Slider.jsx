import { useState } from "react";

import arrowLeft from '../assets/arrowLeft.svg';
import arrowRight from '../assets/arrowRight.svg';

function Slider({pictures}) {

    const [activeIndex, setActiveIndex] = useState(0);

    const leftSlide = () => {
        setActiveIndex((index) => index - 1 < 0 ? pictures.length : index - 1);
    };

    const rightSlide = () => {
        setActiveIndex((index) => index + 1 > pictures.length - 1 ? 0 : index + 1);
    };

    return (
        <div>
            <div className="slider">
                <img src={arrowLeft} className={`left-slider-arrow`} onClick={leftSlide} alt=""/>
                <img src={pictures[activeIndex]} alt="Logement" className="slider-img" />
                <img src={arrowRight} className={`right-slider-arrow`} onClick={rightSlide} alt=""/>
                <p className="slider-index">{activeIndex + 1}/{pictures.length}</p>
            </div>
        </div>
    );
}

export default Slider;
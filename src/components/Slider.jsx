import { useState } from "react";

import arrowLeft from '../assets/arrowLeft.svg';
import arrowRight from '../assets/arrowRight.svg';

const Slider = ({pictures}) => {

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
                <icon icon={arrowLeft} className={`left_slider_arrow`} onClick={leftSlide} />
                <img src={pictures[activeIndex]} alt="Logement" className="slider_img" />
                <icon icon={arrowRight} className={`right_slider_arrow`} onClick={rightSlide} />
                <p className="slider_index">{activeIndex + 1}/{pictures.length}</p>
            </div>
        </div>
    );
}

export default Slider;
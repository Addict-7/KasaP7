import React from "react";

function Card({title, picture}) {
    return(
        <div className="card-cont">
            <h3> {title}</h3>
            <img src={picture} alt="Logement" />
        </div>
    );
};

export default Card;
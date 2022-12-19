// Component de la bannière de la page d'accueil

function Banner({image}) {
    return(
        <div className="banner-cont">
            <div className="banner-cont-bg">
                <img src={image} alt="Banner Background"/>   
            </div>
            <h1 className="banner-container-title">Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;
// Importation du CSS
import '../styles/banner.css';

// Component de la bannière de la page d'accueil
function Banner({image}) {
    return(
        <div className="banner-content">
            <div className="banner-bg">
                <img src={image} alt="Banner Background"/>   
            </div>
            <div className="banner-title">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    );
}

export default Banner;
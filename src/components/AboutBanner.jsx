// Importation du CSS
import '../styles/aboutbanner.css';

// Component de la bannière de la page d'accueil
function AboutBanner({image}) {
    return(
        <div className="banner-content">
            <div className="banner-bg">
                <img src={image} alt="About Banner Background"/>   
            </div>
        </div>
    );
}

export default AboutBanner;
// Importation de Link
import { Link } from 'react-router-dom';

// Importation des components
import Header from '../components/Header';

// Importation des images
import logoHeader from '../assets/logo.png';

// Importation du CSS
import '../styles/error.css';

function Error() {
    return (
        <div>
        <Header logo={logoHeader} />
            <div className="error">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to={"/"}>
                    <span>Retourner sur la page d’accueil</span>
                </Link>
            </div>
        </div>
    )
};

export default Error;
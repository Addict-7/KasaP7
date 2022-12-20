import Header from '../components/Header';

import logoHeader from '../assets/logo.svg';

function Error() {
    return (
        <div>
        <Header logo={logoHeader}/>
            <div className="error">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <a href="/">Retourner sur la page d'accueil</a>
            </div>
        </div>
    )
};

export default Error;
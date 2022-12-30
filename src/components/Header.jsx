// Importation de NavLink
import {NavLink} from "react-router-dom";
 
// Importation du CSS
import '../styles/header.css';

// Component pour le header comprenant le logo et la navigation (Accueil / A propos)
function Header({ logo }) {
    return (
        <div className='header'>
            <div className='header-logo'>
                <img src={logo} alt="Logo Kasa Header" />
            </div>
            <ul className='header-nav'>
                <NavLink  to="/" className={(nav)=> (nav.isActive ? 'header-nav-active': "header-nav")} end ><li>Accueil</li></NavLink>
                <NavLink to="/about" className={(nav)=> (nav.isActive ? 'header-nav-active': "header-nav")} ><li >A Propos</li></NavLink>
            </ul>
        </div>
    );
};

export default Header;
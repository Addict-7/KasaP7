// Importation des components
import Header from '../components/Header';
import AboutBanner from '../components/AboutBanner';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';

// Importation des images
import logoHeader from '../assets/logo.png';
import logoFooter from '../assets/logofooter.png';

// Importation des données
import about from "../datas/about.json"

// Importation du CSS
import '../styles/about.css';

function About() {

    return (

        <div className="about-container">
            <header>
                <Header logo={logoHeader}/>
            </header>
            <section>
                <AboutBanner />
            </section>
            <section className="about-main-content">
                {about.map(({title, description}) => (
                    <Collapse key={description} title={title} content={description} />
                ))}
            </section>
            <Footer logo={logoFooter}/>
        </div>
    )
};


export default About;
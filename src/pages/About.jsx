// Importation du CSS
import '../styles/about.css';

// Importation des components
import Header from '../components/Header';
import AboutBanner from '../components/AboutBanner';
import Footer from '../components/Footer';

// Importation des images
import logoHeader from '../assets/logo.png';
import imageBanner from '../assets/aboutbannerSmartphone.png';
import logoFooter from '../assets/logofooter.png';
import Collapse from '../components/Collapse';

// Importation des données
import about from "../datas/about.json"

function About() {

    return (
        <div>
            <div className="about-container">
                <header>
                    <Header logo={logoHeader}/>
                </header>
                <section>
                    <AboutBanner image={imageBanner}/>
                </section>
                <section className="about-main-content">
                    {about.map(({title, description}) => (
                        <Collapse key={description} title={title} content={description} />
                    ))}
                </section>
                <Footer logo={logoFooter}/>
            </div>
        </div>
    )
};


export default About;
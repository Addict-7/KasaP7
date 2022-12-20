// Importation du CSS
import '../styles/index.css';

// Importation des components
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

// Importation des images
import logoHeader from '../assets/logo.svg';
import imageBanner from '../assets/aboutbanner.png';
import logoFooter from '../assets/logofooter.svg';
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
                    <Banner image={imageBanner}/>
                </section>
                <section className="about-main-content">
                    {about.map(({name, content}) => (
                        <Collapse key={content} name={name} content={[content]} />
                    ))}
                </section>
                <Footer logo={logoFooter}/>
            </div>
        </div>
    )
};


export default About;
// Importation du CSS
import '../styles/index.css';

// Importation des components
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

// Importation des images et données
import logoHeader from '../assets/logo.svg';
import imageBanner from '../assets/banner.png';
import logoFooter from '../assets/logofooter.svg';
import about from "../datas/about.json"
import Collapse from '../components/Collapse';


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
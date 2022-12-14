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
import about from "../Data/about.json"


function About() {
    return (
        <div>
            <header>
                <Header logo={logoHeader}/>
            </header>
            <banner>
                <Banner image={imageBanner}/>
            </banner>
            <section className='main-about-cont'>
                {about.map((data, index) => (
                    <DropDown key={index} 
                    buttonClosed={closedButton} 
                    buttonOpen={openButton} 
                    title={data.title} 
                    description={data.description} />
                ))
                }
            </section>
            <Footer logo={logoFooter}/>
        </div>
    )
};


export default About;
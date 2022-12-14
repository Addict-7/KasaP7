// Importation du CSS
import '../styles/index.css';

// Importation des components
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Card from '../components/Card';

// Importation des images et données
import logoHeader from '../assets/logo.svg';
import imageBanner from '../assets/banner.png';
import logoFooter from '../assets/logofooter.svg';
import annonces from '../datas/annonces.json';

// Importation de Link
import { Link } from 'react-router-dom';


function Home() {
    return (
      <div>
        <div className='home-cont'>
          <header>
            <Header logo={logoHeader}/>
          </header>
          <banner>
            <Banner image={imageBanner}/>
          </banner>
          <section className='home-main-content'>
            {annonces.map((annonce) => {
              return(
                <Link key={annonce.id} to={`/annonces/${annonce.id}`}>
                  <Card picture={annonce.cover} title={annonce.title}/>
                </Link>
              )
              }
            )}
          </section>
          <footer>
            <Footer logo={logoFooter}/>
          </footer>
        </div>
      </div>
    );
  }

  export default Home;


  /** <div>
          <header className="header">
          <Navigation />
          </header>
          <Banner>
          <Logo image={imageLogo}/>
          <div className="banner-container-background"></div>
              <h1 className="banner-container-title">Chez vous, partout et ailleurs.</h1>
          </Banner>
          <section className="background">
            {annonces.map((annonce) => {
              return(
                <Link  key={annonce.id} to={`/annonces/${annonce.id}`}>
              <Card picture={annonce.cover} title={annonce.title}/>
              </Link>
              )
            })}
          </section>
          </div>
        <Footer logo={logoFooter}/>
        
        **/
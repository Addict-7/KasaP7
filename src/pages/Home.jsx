// Importation de Link
import { Link } from 'react-router-dom';

// Importation du CSS
import '../styles/home.css';

// Importation des components
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Card from '../components/Card';

// Importation des images et données
import logoHeader from '../assets/logo.png';
import imageBanner from '../assets/banner.png';
import logoFooter from '../assets/logofooter.png';
import annonces from '../datas/annonces.json';




function Home() {
    return (
      <div>
        <div className='home-container'>
          <header>
            <Header logo={logoHeader}/>
          </header>
          <section className='home-banner'>
            <Banner image={imageBanner}/>
          </section>
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
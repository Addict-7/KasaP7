// Importation de useParams pour récupérer l'id du logement selectionné via l'URL
import { useParams } from "react-router-dom";

// Importation des components
import Header from '../components/Header';
import Slider from '../components/Slider';
import Tags from '../components/Tags';
import Host from '../components/Host';
import Ratings from '../components/Ratings';
import Collapse from "../components/Collapse";
import Footer from '../components/Footer';
import Error from './Error';

// Importation des images
import logoHeader from '../assets/logo.png';
import logoFooter from '../assets/logofooter.png';

// Importation des données
import annonces from '../datas/annonces.json';

// Importation du CSS
import '../styles/annonce.css';


function Annonce() {
  
  const { annonceId } = useParams();

  const annonce = (annonces.filter((annonce) => annonce.id === annonceId)[0]);

      return annonce ? (
        <div className="annonce-body">
          <Header logo={logoHeader} />
          <Slider pictures={annonce.pictures} />
          <section className="annonce">
            <div className="annonce-content">
              <h1 className="annonce-title">{annonce.title}</h1>
              <h2 className="annonce-location">{annonce.location}</h2>
              <div className="annonce-tags">
                <Tags tags={annonce.tags} />
              </div>
            </div>
            <div className="host-infos">
              <Host host={annonce.host} />
              <div className="host-rating">
                <Ratings rating={annonce.rating} />
              </div>
            </div>
          </section>
          <section className="annonce-collapse">
            <Collapse type="description" title="Description" content={annonce.description} />
            <Collapse type="equipement" title="Equipements" content={annonce.equipments} />
          </section>
          <Footer logo={logoFooter} />
        </div>
      ) : (<Error /> )
    }

  
  export default Annonce;

// Importation du CSS
import '../styles/annonce.css';
// Importation du ' hook ' useParams pour récupérer l'id du logement selectionné et Navigate pour aller sur une page sous une condition
import { Navigate, useParams } from "react-router-dom";

// Importation des components
import Header from '../components/Header';
import Slider from '../components/Slider';
import Tags from '../components/Tags';
import Host from '../components/Host';
import Ratings from '../components/Ratings';
import Collapse from "../components/Collapse";
import Footer from '../components/Footer';

// Importation des images
import logoHeader from '../assets/logo.png';
import logoFooter from '../assets/logofooter.png';

// Importation des données
import annonces from '../datas/annonces.json';

function Annonce() {
  
  const { annonceId } = useParams();

  const annonce = annonces.find((annonce) => annonce.id === annonceId);

  const { title, location, host, tags, description, equipments, rating, pictures } = annonce;

  if (!annonce) {
    return <Navigate to="/Error"/>;
  } 
  else {
    
    return (
      <div>
        <Header logo={logoHeader} />
        <Slider pictures={pictures} />
        <section className="annonce">
          <div className="annonce-content">
            <h1 className="annonce-title">{title}</h1>
            <h2 className="annonce-location">{location}</h2>
            <div className="annonce-tags">
              <Tags tags={tags} />
            </div>
          </div>
          <div className="host-infos">
            <Host host={host} />
            <div className="host-rating">
              <Ratings rating={rating} />
            </div>
          </div>
        </section>
        <section className="annonce-collapse">
          <Collapse type="description" title="Description" content={description} />
          <Collapse type="equipement" title="Equipements" content={equipments} />
        </section>
        <Footer logo={logoFooter} />
      </div>
    )
  }
}
  
  export default Annonce;

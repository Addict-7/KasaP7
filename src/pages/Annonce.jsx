// Importation du ' hook ' useParams pour récupérer l'id du logement selectionné
import { redirect, useParams } from "react-router-dom";


import Header from '../components/Header';
import Slider from '../components/Slider';
import Tags from '../components/Tags';
import Ratings from '../components/Ratings';
import Collapse from "../components/Collapse";
import Footer from '../components/Footer';

import logoHeader from '../assets/logo.png';
import logoFooter from '../assets/logofooter.png';

// Importation des données
import annonces from '../datas/annonces.json';

function Annonce() {
  
  const { annonceId } = useParams();

  const annonce = annonces.find((annonce) => annonce.id === annonceId);

  const { title, location, host, tags, description, equipments, rating, pictures } = annonce;

  return (
    <div>
      <Header logo={logoHeader} />
      <section className="annonce">
        <Slider pictures={pictures} />
          <div className="annonce-content">
            <h1 className="annonce-title">{title}</h1>
            <h2 className="annonce-location">{location}</h2>
            <div className="annonce-tags">
              <Tags tags={tags} />
            </div>
          </div>

          <div className="host">
                <div className="host-infos">
                    <p className="host-name">{host.name}</p>
                    <img className="host-img" src={host.picture} alt="" />
                </div>
                <div className="host-rating">
                    <Ratings rate={rating} />
                </div>
            </div>
      </section>

      <section className="annonce-collapse">
        <Collapse type="equipement" name="Description" content={description} />
        <Collapse type="equipement" name="Equipements" content={equipments} />
      </section>

      <Footer logo={logoFooter}/>
    </div>
  )
}
  
  export default Annonce;

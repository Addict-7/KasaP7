// Importation du ' hook ' useParams pour récupérer l'id du logement selectionné
import { useParams, redirect } from "react-router-dom";
//import { useEffect } from 'react';

import Header from '../components/Header';
import Slider from '../components/Slider';
import Tags from '../components/Tags';
import Ratings from '../components/Ratings';
import Collapse from "../components/Collapse";
import Footer from '../components/Footer';

// Importation des données
import annonces from "../datas/annonces.json";

function Annonce() {
  
  const { annonceId } = useParams();
  const annonce = annonces.find((annonce) => annonce.id === annonceId);
  const { title, location, rating, host, equipments, description, picture, tags } = annonce;

  return (
    <div>

      <Header />
      <Slider pictures={annonce.picture} />

      <section className="annonce">
        <div className="annonce-content">annonce.
          <h1 className="annonce-title">{annonce.title}</h1>
          <h2 className="annonce-location">{annonce.location}</h2>
          <div className="annonce-tags">
            {tags.map((tag) => (
            <Tags name={tag} key={tag} />
            ))}
          </div>
        </div>

        <div className="host">
              <div className="host-infos">
                  <p className="host-name">{host.name}</p>
                  <img className="host-img" src={host.picture} alt="" />
              </div>

              <div className="host-rating">
                  <Ratings rate={host.rating} />
              </div>
          </div>
      </section>

      <section className="annonce-collapse">
        <Collapse type="equipement" name="Description" content={annonce.description} />
        <Collapse type="equipement" name="Equipements" content={annonce.equipments} />
      </section>

      <Footer />
    </div>
  ) : (
    redirect('./Error')
  )
}

export default Annonce;
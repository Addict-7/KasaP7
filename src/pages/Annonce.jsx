// Importation du ' hook ' useParams pour récupérer l'id du logement selectionné
import { useParams } from "react-router-dom";
//import { useEffect } from 'react';

import Header from '../components/Header';
import Slider from '../components/Slider';
import Tags from '../components/Tags';
import Ratings from '../components/Ratings';
import Collapse from "../components/Collapse";
import Footer from '../components/Footer';

// Importation des données
import data from "../datas/annonces.json";


function Annonce() {
  
  const { productId } = useParams();

  const annonce = data.find((annonce) => annonce.id === productId);

  const { title, location, rating, host, equipments, description, pictures } =
    annonce;

    return (
      <div>
        <Header />
        <Slider pictures={pictures} />
        <section className="annonce">
          <div className="annonce-content">
            <h1 className="annonce-title">{title}</h1>
            <h2 className="annonce-location">{location}</h2>
            <div className="annonce-tags">
              {tags.map((tag) => (
              <Tags name={tag} key={tag} />
              ))}
            </div>
          </div>
          <div className="host">
                <div className="host-infos">
                    <p className="host-name">{host.name}</p>
                    <img className="host-img" src={picture} alt="" />
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

      <Footer />
    </div>
  )
}

export default Annonce;
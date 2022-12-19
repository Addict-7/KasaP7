// Importation du ' hook ' useParams pour récupérer l'id du logement selectionné
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

import Slider from "../components/Slider";

// Importation des données
import data from "../datas/annonces.json";

function Annonce() {
  const { annonceId } = useParams();
  const navigate = useNavigate ();
  const annonces = data.find((annonce) => annonce.id === annonceId)

  useEffect (() => {
      if (annonces.length === 0) {navigate ("*")}
  },);

  return (
      <div className="location">
          {annonces.map(
      ({
          id, title, pictures, description, host, rating, location, equipments, tags,
      }) => (
          <div key={`description-${id}`}>
              <Slider pictures={pictures} />
              <Description
                  description={description}
                  equipments={equipments}
                  host={host}
                  id={id}
                  location={location}
                  rating={rating}
                  tags={tags}
                  title={title}
              />
          </div>
          )
      )}
      </div>
  )
}

export default Annonce;
// Importation du CSS
import '../styles/host.css';

// Component Host comprenant le nom et la photo de ceux-ci
function Host({ host }) {
    return (
      <div className="host">
        <div className="host-name">{host.name}</div>
        <img className="host-picture" src={host.picture} alt={host.name} />
      </div>
    );
  }
  
  export default Host;
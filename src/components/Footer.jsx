// Importation du CSS
import '../styles/footer.css';

// Component pour le footer comprenant la date, le logo et le message sur les droits de Kasa.
function Footer({logo}) {
  
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo Kasa Footer"/>
      </div>
      <div className="footer-text">
        <p>&copy;2020 Kasa. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
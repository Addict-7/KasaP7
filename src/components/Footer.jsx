// Component pour le footer comprenant la date, le logo et le message sur les droits de Kasa.

function Footer({logo}) {
  
  const effectiveYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo Kasa Footer"/>
      </div>
      <p className="footer-text">
        &copy;{effectiveYear} Kasa. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="heading">Terroir Glass</p>
      <div className="footer-links">
        <a href="#">About us</a>
        <a href="#">Careers</a>
        <a href="#">Shop</a>
      </div>
      <p className="rights">
        © {String(year)} Terroir Glass. All rights reserved.
      </p>
    </footer>
  );
};

import wineGlass from "../assets/wine-glass.jpg";

export const Header = () => {
  return (
    <header>
      <img src={wineGlass} alt="wine-glass" className="header-image" />
      <h1 className="hero-title">
        A great glass <span>reveals</span> the wine.
      </h1>
    </header>
  );
};

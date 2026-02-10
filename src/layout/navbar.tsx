export const Navbar = () => {
  return (
    <nav className="navbar">
      <p className="heading">Terroir Glass</p>
      <input type="checkbox" id="menu-toggle" />
      <label className="hamburger" htmlFor="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul
        className="nav-links"
        onClick={() => {
          (document.getElementById("menu-toggle") as HTMLInputElement).checked =
            false;
        }}
      >
        <li>
          <a href="#at-the-table">At the Table</a>
        </li>
        <li>
          <a href="#features">Craft & Purpose</a>
        </li>
        <li>
          <a href="#the-collection">The collection</a>
        </li>
        <li>
          <a href="#upgrade">Upgrade</a>
        </li>
      </ul>
    </nav>
  );
};

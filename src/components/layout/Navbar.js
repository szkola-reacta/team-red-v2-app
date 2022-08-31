import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const activeClassName = "active";
  return (
    <header className="header">
      <div className="container header__content">
        <Link to="/" className="header__logo">
          Logo
        </Link>
        <nav className="header__navigation">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeClassName : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? activeClassName : undefined)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                className={({ isActive }) => (isActive ? activeClassName : undefined)}
              >
                Our Team
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

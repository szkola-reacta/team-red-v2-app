import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      linkTo: "/",
    },
    {
      name: "About",
      linkTo: "/about",
    },
    {
      name: "Our Team",
      linkTo: "/team",
    },
    {
      name: "Sing in",
      linkTo: "/login",
    },
  ];

  return (
    <header className="header">
      <div className="container header__content">
        <Link to="/" className="header__logo">
          Logo
        </Link>
        <nav className="header__navigation">
          <ul>
            {navLinks.map((link) => {
              return (
                <li key={`link-${link.name}`}>
                  <NavLink to={link.linkTo}>{link.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import { NavLink } from "react-router-dom";

function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
    backgroundColor: "red",
  };
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;

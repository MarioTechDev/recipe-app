import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">
          Recipes
        </Link>
      </h1>
      <ul className="main-nav">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/recipes">
            Recipes
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
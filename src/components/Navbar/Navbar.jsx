import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link
          to="/"
        >
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Recipe App</Link>
      </div>
      <div className="options">
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>

          <li>
            <Link to="/recipes">Recipes page</Link>
          </li>

          <li>
            <Link to="#">Pages</Link>
          </li>

          <li>
            <Link to="#">Buy</Link>
          </li>
        </ul>
      </div>
      <div className="search-image">
        <FaSearch />
        <CgProfile />
      </div>
    </header>
  );
};

export default Header;

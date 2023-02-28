import { Link } from "react-router-dom";
import logo from "strickland-logo.jpeg";

export default function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Strickland Propane Logo" height="100" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <h1>Strickland Propane</h1>
      <h2>Coming Soon!</h2>
    </header>
  );
}

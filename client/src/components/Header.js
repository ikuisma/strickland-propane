import logo from "strickland-logo.jpeg";

export default function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Strickland Propane Logo" height="100" />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
      <h1>Strickland Propane</h1>
      <h2>Coming Soon!</h2>
    </header>
  );
}

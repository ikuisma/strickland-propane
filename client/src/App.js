import logo from "./strickland-logo.jpeg";

function App() {
  return (
    <>
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
      <main>
        <section>
          <h3>Products Coming Soon</h3>
        </section>
      </main>
      <footer>
        <section>
          <span>
            Fuelled By C<sub>3</sub>H<sub>8</sub>
          </span>
        </section>
      </footer>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "components/Header.js";
import Footer from "components/Footer.js";
import Home from "pages/Home.js";
import About from "pages/About.js";

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="Strickland | %s" />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

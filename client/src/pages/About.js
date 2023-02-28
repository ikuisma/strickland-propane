import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <section>
        <header>
          <h2>About Strickland Propane</h2>
        </header>
        <blockquote>
          "Strickland Propane is a fictional propane and propane accessories
          supplier, headquartered at 135 Los Gatos Road in Arlen, Texas."
        </blockquote>
      </section>
    </>
  );
}

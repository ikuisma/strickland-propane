import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section>
        <h3>Products Coming Soon</h3>
      </section>
    </>
  );
}

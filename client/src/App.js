import { useQuery } from "@apollo/client";
import { QUERY_PING } from "./utils/queries";

function App() {
  const { data, loading, error } = useQuery(QUERY_PING);
  const ping = data?.ping;
  const display = loading || error || `${ping.message} - ${ping.timestamp}!`;
  return (
    <>
      <h1>Strickland Propane</h1>
      <h2>Coming Soon!</h2>
      <p>ping: {display}</p>
    </>
  );
}

export default App;

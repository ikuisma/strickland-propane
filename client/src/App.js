import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const ping = async () => {
    const response = await fetch("/ping");
    const data = await response.text();
    setMessage(data);
  };
  return (
    <>
      <h1>Strickland Propane</h1>
      <h2>Coming Soon!</h2>
      <button onClick={ping}>Ping The Server</button>
      <p>Server responded: {message}</p>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(import.meta.env.VITE_API_URL);
      const data = await res.json();
      setMsg(data.message);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="App">
        <h1>what is fetching</h1>
        <h2>{msg}</h2>
      </div>
    </>
  );
}

export default App;

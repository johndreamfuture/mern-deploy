import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");

  // Fetching message from backend on mount
  useEffect(() => {
    fetch("https://jian-8h95.onrender.com")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message)
        setUser(data.user)
      });
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
      <p>{user}</p>
    </div>
  );
}

export default App;

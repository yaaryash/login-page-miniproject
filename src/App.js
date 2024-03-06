import { useState } from "react";
import "./App.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setErr("");
      setIsSubmit(true);
    } else {
      setErr("Invalid username or password");
      setIsSubmit(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isSubmit ? (
        <p>Welcome, {username}!</p>
      ) : (
        <form onSubmit={handlesubmit}>
          {err && <p>{err}</p>}
          <div>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              placeholder="username"
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}

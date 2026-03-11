import React, { useState } from "react";

// Session component
function SessionExample() {
  const [username, setUsername] = useState("");

  const setCookie = () => {
    document.cookie = "username=" + username + "; path=/";
    alert("Cookie Saved");
  };

  const getCookie = () => {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let c = cookies[i].trim();
      if (c.startsWith("username=")) {
        alert("Stored User: " + c.substring(9));
      }
    }
  };

  const clearSession = () => {
    document.cookie =
      "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("Session Cleared");
  };

  return (
    <div>
      <h2>Session Management using Cookies</h2>

      <input
        type="text"
        placeholder="Enter Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <button onClick={setCookie}>Save Session</button>
      <button onClick={getCookie}>Get Session</button>
      <button onClick={clearSession}>Clear Session</button>
    </div>
  );
}

// Main App component
function App() {
  return (
    <div>
      <SessionExample />
    </div>
  );
}

export default App;
import React, { useState } from "react";

// Form Component
function FormDataExample() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Name: " + name + "\nEmail: " + email);
  };

  return (
    <div>
      <h2>Form Data Example</h2>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <label>Email: </label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <div>
      <FormDataExample />
    </div>
  );
}

export default App;
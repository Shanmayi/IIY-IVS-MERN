import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Home Component
function Home() {
  return <h2>Home Page</h2>;
}

// About Component
function About() {
  return <h2>About Page</h2>;
}

// Contact Component
function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router Example</h1>

        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/about"> About</Link> | 
          <Link to="/contact"> Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
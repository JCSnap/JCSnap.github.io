import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <nav className="bg-main h-60">
        <Link to="/" className="text-white text">
          Home
        </Link>{" "}
        |
        <Link to="/projects" className="text-white">
          Projects
        </Link>{" "}
        |
        <Link to="/experience" className="text-white">
          Experience
        </Link>{" "}
        |
        <Link to="/contact" className="text-white">
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

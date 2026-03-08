import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Development from "./pages/Development";
import Properties from "./sections/PropertySection";
import Transparency from "./pages/Transparency";

function App() {

  return (
    <BrowserRouter>

      {/* Navbar sab pages par */}

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/development" element={<Development />} />

        <Route path="/properties" element={<Properties />} />

        <Route path="/transparency" element={<Transparency />} />


      </Routes>

      {/* Footer sab pages par */}

      <Footer />

    </BrowserRouter>
  );

}

export default App;
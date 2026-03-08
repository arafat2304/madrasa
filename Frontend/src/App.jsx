import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Development from "./pages/Development";
import Transparency from "./pages/Transparency";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/development" element={<Development />} />


        <Route path="/transparency" element={<Transparency />} />


      </Routes>

    </BrowserRouter>

  );
}

export default App;
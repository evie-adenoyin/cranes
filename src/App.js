import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";

function App() {
  return (
  <Routers>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  </Routers>
  );
}

export default App;

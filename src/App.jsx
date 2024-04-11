import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Index from "./components/Index";
import Skills from "./pages/Skills";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/pricing" element={<Pricing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

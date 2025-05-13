import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/home";
// import About from "./pages/About/about";
// import Experience from "./pages/Experience";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} /> */}
        {/* Se usar páginas dinâmicas, você pode adicionar uma rota com :slug aqui */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

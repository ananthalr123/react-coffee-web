import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" activeClassName="active" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
